import css from "dedent";
import { Fragment } from "react";
import { CodeExample } from "./code-example";

const screens = {
  sm: "small",
  md: "medium",
  lg: "large",
};

function startsWithVowel(string: string) {
  return ["a", "e", "i", "o", "u"].includes(string[0]);
}

function htmlSnippet({
  elementName,
  attributes,
  featuredClass,
}: {
  elementName: string;
  attributes: Record<string, string>;
  featuredClass: string;
}) {
  let parts = [`<!-- [!code classes:${featuredClass}] -->\n`];

  const attributesString = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  parts.push(`<${elementName} ${attributesString}`);

  if (elementName === "img" || elementName === "input") {
    parts.push(" />");
  } else if (elementName === "textarea") {
    parts.push("></textarea>");
  } else if (elementName === "iframe") {
    parts.push("></iframe>");
  } else {
    parts.push(">\n");
    parts.push(elementName === "p" ? "  Lorem ipsum dolor sit amet...\n" : "  <!-- ... -->\n");
    parts.push(`</${elementName}>`);
  }

  return parts.join("");
}

export function UsingACustomValue({
  utility,
  utilities,
  name,
  value,
  variable,
  dataType,
  element = "div",
  elementAttributes = {},
  children,
}: {
  utility?: string;
  utilities?: Array<string>;
  name?: string;
  value?: string;
  variable?: string;
  dataType?: string;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  let property = `--my-${variable || utility || utilities![0]}`;

  if (dataType) {
    property = `${dataType}:${property}`;
  }

  utility = utility || utilities![0];

  return (
    <>
      <p>
        {utilities ? (
          <>
            Use utilities like{" "}
            {utilities.map((name, index) => (
              <Fragment key={index}>
                {utilities.length > 1 && index === utilities.length - 1 ? " and " : ""}
                <code>
                  {name}-[<var>{"<value>"}</var>]
                </code>
                {index === utilities.length - 1 || utilities.length < 3 ? "" : ","}
              </Fragment>
            ))}
          </>
        ) : (
          <>
            Use the{" "}
            <code>
              {utility}-[<var>{"<value>"}</var>]
            </code>{" "}
            syntax
          </>
        )}{" "}
        to set the {name || utility} based on a completely custom value:
      </p>
      {children || (
        <div>
          <div className="not-prose">
            <CodeExample
              example={{
                lang: "html",
                code: htmlSnippet({
                  elementName: element,
                  attributes: {
                    class: `${utility}-[${value}] ...`,
                    ...elementAttributes,
                  },
                  featuredClass: `${utility}-[${value}]`,
                }),
              }}
            />
          </div>
        </div>
      )}
      <p>
        For CSS variables, you can also use the{" "}
        <code>
          {utility}-({dataType ? `${dataType}:` : null}
          <var>{"<custom-property>"}</var>)
        </code>{" "}
        syntax:
      </p>
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "html",
              code: htmlSnippet({
                elementName: element,
                attributes: {
                  class: `${utility}-(${property}) ...`,
                  ...elementAttributes,
                },
                featuredClass: `${utility}-(${property})`,
              }),
            }}
          />
        </div>
      </div>
      <p>
        This is just a shorthand for{" "}
        <code>
          {utility}-[{dataType ? `${dataType}:` : null}var(<var>{"<custom-property>"}</var>)]
        </code>{" "}
        that adds the <code>var()</code> function for you automatically.
      </p>
    </>
  );
}

export function ResponsiveDesign({
  property,
  properties,
  breakpoint = "md",
  defaultClass,
  featuredClass,
  element = "div",
  elementAttributes = {},
  children,
}: {
  property: string;
  properties: Array<string>;
  breakpoint?: keyof typeof screens;
  defaultClass?: string;
  featuredClass: string;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p>
        {properties ? (
          <>
            Prefix{" "}
            {properties.map((name, index) => (
              <Fragment key={index}>
                {properties.length > 1 && index === properties.length - 1 ? " and " : ""}
                <code>{name}</code>
                {index === properties.length - 1 || properties.length < 3 ? "" : ","}
              </Fragment>
            ))}{" "}
            utilities{" "}
          </>
        ) : (
          <>
            Prefix {startsWithVowel(property) ? "an" : "a"} <code>{property}</code> utility{" "}
          </>
        )}
        with a breakpoint variant like <code>{breakpoint}:</code> to only apply the utility at {screens[breakpoint]}{" "}
        screen sizes and above:
      </p>
      {children || (
        <div>
          <div className="not-prose">
            <CodeExample
              example={{
                lang: "html",
                code: htmlSnippet({
                  elementName: element,
                  attributes: {
                    class: `${defaultClass} ${breakpoint}:${featuredClass} ...`,
                    ...elementAttributes,
                  },
                  featuredClass: `${breakpoint}:${featuredClass}`,
                }),
              }}
            />
          </div>
        </div>
      )}
      <p>
        Learn more about using variants in the <a href="/docs/hover-focus-and-other-states">variants documentation</a>.
      </p>
    </>
  );
}

export function TargetingSpecificStates({
  property,
  defaultClass,
  featuredClass,
  variant = "hover",
  element = "div",
  elementAttributes = {},
  children,
}: {
  property: string;
  variant?: string;
  defaultClass?: string;
  featuredClass: string;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p>
        Prefix {startsWithVowel(property) ? "an" : "a"} <code>{property}</code> utility with a variant like{" "}
        <code>{variant}:*</code> to only apply the utility in that state:
      </p>
      {children || (
        <div>
          <div className="not-prose">
            <CodeExample
              example={{
                lang: "html",
                code: htmlSnippet({
                  elementName: element,
                  attributes: {
                    class: `${defaultClass} ${variant}:${featuredClass} ...`,
                    ...elementAttributes,
                  },
                  featuredClass: `${variant}:${featuredClass}`,
                }),
              }}
            />
          </div>
        </div>
      )}
      <p>
        Learn more about using variants in the <a href="/docs/hover-focus-and-other-states">variants documentation</a>.
      </p>
    </>
  );
}

export function CustomizingYourTheme({
  utility,
  utilities,
  name,
  themeKey,
  customName,
  customValue,
  customCSS,
  includeSpacingNote = false,
  element = "div",
  elementAttributes = {},
  children,
}: {
  utility: string;
  utilities?: Array<string>;
  name: string;
  themeKey?: string;
  customName: string;
  customValue?: string;
  customCSS?: string;
  includeSpacingNote?: boolean;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p>
        Use the <code>--{themeKey || utility || utilities![0]}-*</code> theme variables to customize the {name}{" "}
        utilities in your project:
      </p>
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "css",
              code:
                customCSS ||
                css`
                  @theme {
                    --${themeKey || utility}-${customName}: ${customValue}; /* [!code highlight] */
                  }
                `,
            }}
          />
        </div>
      </div>
      {utilities ? (
        <p>
          Now utilities like{" "}
          {utilities.map((name, index) => (
            <Fragment key={index}>
              {utilities.length > 1 && index === utilities.length - 1 ? " and " : ""}
              <code>
                {name}-{customName}
              </code>
              {index === utilities.length - 1 || utilities.length < 3 ? "" : ","}
            </Fragment>
          ))}{" "}
          can be used in your markup:
        </p>
      ) : (
        <p>
          Now the{" "}
          <code>
            {utility}-{customName}
          </code>{" "}
          utility can be used in your markup:
        </p>
      )}
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "html",
              code: htmlSnippet({
                elementName: element,
                attributes: {
                  class: `${utility || utilities![0]}-${customName}`,
                  ...elementAttributes,
                },
                featuredClass: `${utility || utilities![0]}-${customName}`,
              }),
            }}
          />
        </div>
      </div>
      {includeSpacingNote && (
        <>
          <p>
            The{" "}
            <code>
              {utility}-<var>{"<number>"}</var>
            </code>{" "}
            utilities are driven by the <code>--spacing</code> theme variable, which you can also customize:
          </p>
          <div>
            <div className="not-prose">
              <CodeExample
                example={{
                  lang: "css",
                  code: css`
                    @theme {
                      --spacing: 1px; /* [!code highlight] */
                    }
                  `,
                }}
              />
            </div>
          </div>
        </>
      )}
      {children}
      {includeSpacingNote ? (
        <p>
          Learn more about customizing the spacing scale in the{" "}
          <a href="/docs/theme#customizing-your-theme">theme documentation</a>.
        </p>
      ) : (
        <p>
          Learn more about customizing your theme in the{" "}
          <a href="/docs/theme#customizing-your-theme">theme documentation</a>.
        </p>
      )}
    </>
  );
}

export function CustomizingYourSpacingScale({ utility, utilities }: { utility: string; utilities: Array<string> }) {
  utilities = utilities || [utility];

  return (
    <>
      <p>
        The{" "}
        {utilities.map((name, index) => (
          <Fragment key={index}>
            {utilities.length > 1 && index === utilities.length - 1 ? " and " : ""}
            <code>
              {name}-<var>{"<number>"}</var>
            </code>
            {index === utilities.length - 1 || utilities.length < 3 ? "" : ","}
          </Fragment>
        ))}{" "}
        utilities are driven by the <code>--spacing</code> theme variable, which can be customized in your own theme:
      </p>
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "css",
              code: css`
                @theme {
                  --spacing: 1px; /* [!code highlight] */
                }
              `,
            }}
          />
        </div>
      </div>
      <p>
        Learn more about customizing the spacing scale in the <a href="/docs/theme">theme variable documentation</a>.
      </p>
    </>
  );
}

export function CustomizingYourThemeColors({
  utility,
  utilities,
  element = "div",
  elementAttributes = {},
}: {
  utility: string;
  utilities?: Array<string>;
  element?: string;
  elementAttributes?: Record<string, string>;
}) {
  return (
    <CustomizingYourTheme
      themeKey="color"
      name="color"
      utility={utility}
      utilities={utilities}
      customName="regal-blue"
      customValue="#243c5a"
      element={element}
      elementAttributes={elementAttributes}
    />
  );
}
