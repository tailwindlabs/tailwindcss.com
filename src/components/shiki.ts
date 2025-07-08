const commentRegex = /\/\*\s*.*?\s*\*\/|\/\/\s*.*|<!--\s*.*?\s*-->|#\s*.*/g;
const codeTagRegex = /\[!code\s+([^\]]+)\]/;

export function stripShikiComments(code: string): string {
  let lines = code.split("\n");
  let result: string[] = [];
  let skip = 0;

  for (let i = 0; i < lines.length; i++) {
    // skip lines if a remove directive is active
    if (skip > 0) {
      skip--;
      continue;
    }

    let line = lines[i];
    let comments = [...line.matchAll(commentRegex)];

    let removed = false;

    // process comments to detect [!code ...] directives
    for (let c of comments) {
      let match = c[0].match(codeTagRegex);
      if (!match) continue;

      // check if directive to remove next N lines
      let spec = match[1];
      let removeMatch = spec.match(/^--:(\d+)$/);
      if (removeMatch) {
        // set lines to skip
        skip = parseInt(removeMatch[1], 10) - 1;
        // current line removed (important if the line is not just a comment but also valid code)
        removed = true;
        break;
      }

      // remove comment if it's not a remove directive
      line = line.slice(0, c.index) + line.slice(c.index! + c[0].length);
    }

    // add line if not removed and line is not empty or has no comments
    if (!removed && (comments.length === 0 || line.trim() !== "")) {
      result.push(line);
    }
  }

  return result.join("\n").trim();
}
