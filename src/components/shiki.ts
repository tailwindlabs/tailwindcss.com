const commentPattern = /\/\*\s*(?=\[!)(.*?)\s*\*\/\s*$|<!--\s*(?=\[!)(.*?)\s*-->\s*$|(?:#|\/\/)\s*(?=\[!)(.*)\s*$/g;
const controlPattern = /^\[!code\s+([^:]+)(?::(.*))?\]$/;

export function stripShikiComments(code: string): string {
  if (!code.includes("[!code ") && !code.includes("prettier-ignore")) return code;

  let lines = code.split("\n");
  let result = "";

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let trimmed = line.trim();
    let removed = false;
    let changed = false;

    // Skip lines that are meant to control Prettier
    if (trimmed === "<!-- prettier-ignore -->") {
      continue;
    } else if (trimmed === "# prettier-ignore") {
      continue;
    } else if (trimmed === "// prettier-ignore") {
      continue;
    } else if (trimmed === "/* prettier-ignore */") {
      continue;
    }

    for (let c of line.matchAll(commentPattern)) {
      let content = c[1] ?? c[2] ?? c[3];

      let match = content.match(controlPattern);
      if (!match) continue;

      let kind = match[1];
      let params = match[2];

      // If we see a `[!code --]` or `[!code --:N]` directive it means we need
      // to remove N lines starting at the current line
      if (kind === "--") {
        // Remove the line containing the `[!code --]` directive
        removed = true;

        // Remove the remaining N-1 lines after the current line (if specified)
        let count = parseInt(params ?? "1", 10) - 1;
        if (isNaN(count)) continue;
        i += count;

        break;
      }

      // Remove the comment from the current line
      //
      // NOTE: This has an implicit assumption that the line MUST end with a
      // control comment. Processing multiple comments on one line would
      // mangle the code. This is enforced by the regex patterns above.
      line = line.slice(0, c.index) + line.slice(c.index + c[0].length);
      changed = true;
    }

    // The current line was removed so we can skip it
    if (removed) continue;

    // This line only contained control comments which have been removed
    if (changed && line.trim() === "") continue;

    result += line;
    result += "\n";
  }

  return result.trim();
}
