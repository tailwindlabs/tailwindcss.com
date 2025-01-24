import clsx from "clsx";
import { ThemedToken } from "shiki";
import { html } from "../code-example";
import { HighlightedCode } from "../highlight";
import { TypingAnimation } from "./animation";

export function MultiCursorCode() {
  let code = html`
    <nav class="flex justify-center space-x-4">
      <!-- prettier-ignore -->
      <a href="/dashboard" class="__CLASS__ rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        Home
      </a>
      <a href="/team" class="__CLASS__ rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        Team
      </a>
      <a href="/projects" class="__CLASS__ rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        Projects
      </a>
      <a href="/reports" class="__CLASS__ rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        Reports
      </a>
    </nav>
  `;

  return (
    <HighlightedCode
      className={clsx(
        "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 *:inset-ring *:inset-ring-white/10 dark:*:bg-white/5! dark:*:inset-ring-white/5",
        "**:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh]",
      )}
      example={code}
      transformers={[
        {
          tokens(tokens) {
            let count = 0;

            return tokens.map((line, idx) => {
              let tokens: ThemedToken[] = [];

              for (let token of line) {
                let classIndex = token.content.indexOf("__CLASS__");

                if (classIndex === -1) {
                  tokens.push(token);
                  continue;
                }

                let before = token.content.slice(0, classIndex);
                let after = token.content.slice(classIndex + 9);

                if (before) {
                  tokens.push({ ...token, content: before });
                }

                tokens.push({
                  ...token,
                  content: "__CLASS__",
                  htmlAttrs: {
                    index: `${count++}`,
                  },
                });

                if (after) {
                  tokens.push({ ...token, content: after });
                }
              }

              return tokens;
            });
          },
        },
      ]}
      components={{
        span: (props) => {
          if (props.children === "__CLASS__") {
            return <TypingAnimation {...props} index={Number(props.index)} />;
          }

          return <span {...props} />;
        },
      }}
    />
  );
}
