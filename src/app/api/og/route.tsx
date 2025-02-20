import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";
import openGraphScraper from "open-graph-scraper-lite";

const WIDTH = 1200;
const HEIGHT = 630;

const HOST = process.env.NODE_ENV === "development" ? `http://localhost:3000` : `https://tailwindcss.com`;

export async function GET(req: NextRequest) {
  let requestUrl = new URL(req.url);
  let path = requestUrl.searchParams.get("path")?.replace(/\/+$/, "") ?? "";

  if (path === "") path = "/";

  let { body, statusCode } = await get(`${HOST}${path}`);

  if (statusCode === 404) {
    return NextResponse.error();
  }
  if (statusCode !== 200 || !body) {
    return NextResponse.error();
  }

  let ogs = await openGraphScraper({ html: body });

  if (!ogs.result.success) {
    return NextResponse.error();
  }

  let regex = /(.*?) - (.*?)?$/;
  let title = ogs.result.ogTitle ?? "";
  let description = ogs.result.ogDescription ?? "";
  let section = "";
  let matches = regex.exec(title);
  if (matches) {
    title = matches[1] ?? ogs.result.ogTitle ?? "";
    section =
      matches[2]
        .toLocaleUpperCase()
        // For some reasons, regular dashes can not be rendered, so we're using en dashes instead
        .replace("-", "–") ?? "";
  }

  if (!title) {
    return NextResponse.error();
  }

  // Avoid stray words at the last line.
  if (description.split(" ").length > 2) {
    description =
      description.split(" ").slice(0, -1).join(" ") +
      "\xa0" + // &nbsp;
      description.split(" ").at(-1);
  }

  let [inter, geistMono] = await Promise.all([
    loadGoogleFont("Inter", title + description + "…" /* Used for truncating */),
    loadGoogleFont("Geist Mono", section),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: `url("${HOST}/og-background.jpg")`,
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "Inter",
        }}
      >
        <div tw="absolute flex h-full w-full flex-col justify-between p-[32px] pt-[394px] pr-[40px]">
          <div tw="flex flex-col h-full border-1 border-t border-gray-800 p-8">
            {section && (
              <div
                tw="flex text-[20px] leading-[20px] font-medium tracking-[2px] text-gray-400"
                style={{
                  fontFamily: "Geist Mono",
                }}
              >
                {section}
              </div>
            )}
            <div
              tw="mt-4 text-[60px] leading-[60px] font-medium text-white"
              style={{
                display: "block",
                lineClamp: 1,
              }}
            >
              {title}
            </div>
            {description && (
              <div
                tw="mt-4 text-[24px] leading-[40px] font-medium text-gray-400"
                style={{
                  display: "block",
                  lineClamp: 1,
                }}
              >
                {description}
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: {
        "Cache-Control":
          process.env.NODE_ENV === "development"
            ? "no-cache, no-store"
            : "public, no-transform, s-maxage=31536000, max-age=600",
      },
      fonts: [
        {
          name: "Inter",
          data: inter,
          weight: 400,
        },
        {
          name: "Geist Mono",
          data: geistMono,
          weight: 400,
        },
      ],
    },
  );
}

async function get(url: string) {
  let res = await fetch(url);
  let body = await res.text();
  return { body, statusCode: res.status };
}

async function loadGoogleFont(font: string, text: string, weight: number = 400) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}
