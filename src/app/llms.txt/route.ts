import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { getDocPageSlugs } from "../(docs)/docs/api";
import { extractTextFromMDX } from "../api/llms-txt/ast-extract";
import index from "../(docs)/docs/index";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  let output = "# Tailwind CSS Documentation\n\n";
  output +=
    "This file contains a concatenated, text-only version of all Tailwind CSS documentation pages, optimized for Large Language Model consumption.\n\n";
  output += "---\n\n";

  let slugs = await getDocPageSlugs();

  // Build a map of slugs to their section and title from the index
  let slugToSection = new Map<string, { section: string; title: string }>();
  for (let [section, entries] of Object.entries(index)) {
    for (let entry of entries) {
      let [title, docPath] = entry;
      let slug = docPath.replace("/docs/", "");
      slugToSection.set(slug, { section, title });

      // Handle nested children
      if (entry.length > 2 && Array.isArray(entry[2])) {
        for (let [childTitle, childPath] of entry[2]) {
          let childSlug = childPath.replace("/docs/", "");
          slugToSection.set(childSlug, { section, title: childTitle });
        }
      }
    }
  }

  // Process each slug in the order defined by the index
  let processedSlugs = new Set<string>();
  let currentSection = "";

  for (let [section, entries] of Object.entries(index)) {
    if (section !== currentSection) {
      if (currentSection !== "") {
        output += "\n";
      }
      output += `## ${section}\n\n`;
      currentSection = section;
    }

    for (let entry of entries) {
      let [title, docPath] = entry;
      let slug = docPath.replace("/docs/", "");

      if (processedSlugs.has(slug)) continue;
      processedSlugs.add(slug);

      output += await processSlug(slug, title);

      // Handle nested children
      if (entry.length > 2 && Array.isArray(entry[2])) {
        for (let [childTitle, childPath] of entry[2]) {
          let childSlug = childPath.replace("/docs/", "");
          if (processedSlugs.has(childSlug)) continue;
          processedSlugs.add(childSlug);
          output += await processSlug(childSlug, childTitle);
        }
      }
    }
  }

  // Process any remaining slugs that weren't in the index
  for (let slug of slugs) {
    if (!processedSlugs.has(slug)) {
      let sectionInfo = slugToSection.get(slug);
      let title = sectionInfo?.title || slug;
      output += await processSlug(slug, title);
    }
  }

  return new NextResponse(output, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": process.env.NODE_ENV === "development" ? "no-cache" : "public, max-age=3600",
    },
  });
}

async function processSlug(slug: string, title: string): Promise<string> {
  try {
    let filePath = path.join(process.cwd(), "./src/docs", `${slug}.mdx`);
    let content = await fs.readFile(filePath, "utf8");

    // Extract title and description from exports
    let titleMatch = content.match(/export\s+const\s+title\s*=\s*["']([^"']+)["']/);
    let descriptionMatch = content.match(/export\s+const\s+description\s*=\s*["']([^"']+)["']/);

    let pageTitle = titleMatch ? titleMatch[1] : title;
    let description = descriptionMatch ? descriptionMatch[1] : "";

    // Extract text from MDX
    let extractedText = extractTextFromMDX(content);

    // Remove the title/description header that extractTextFromMDX adds (we'll format it ourselves)
    if (extractedText.startsWith("# ")) {
      let lines = extractedText.split("\n");
      // Skip the title line, description line(s), and separator
      let startIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("---")) {
          startIndex = i + 1;
          break;
        }
      }
      extractedText = lines.slice(startIndex).join("\n").trim();
    }

    // Format the page
    let pageOutput = `### ${pageTitle}\n\n`;
    if (description) {
      pageOutput += `${description}\n\n`;
    }
    pageOutput += `URL: /docs/${slug}\n\n`;
    pageOutput += `${extractedText}\n\n`;
    pageOutput += "---\n\n";

    return pageOutput;
  } catch (error) {
    // Silently skip "installation" - it's a Next.js route without an MDX file
    if (slug === "installation") {
      return "";
    }
    // Log errors for other files
    console.error(`Error processing ${slug}:`, error);
    return "";
  }
}
