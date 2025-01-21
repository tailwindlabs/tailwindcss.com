import { CodeExample } from "@/components/code-example";
import { Example } from "@/components/example";
import { Figure } from "@/components/figure";
import { Button } from "@headlessui/react";
import clsx from "clsx";
import dedent from "dedent";

const html = dedent;

export function StateAttributesExample() {
  return (
    <Figure hint="Click, hover, focus, and drag the button to see the data attributes applied" className="group">
      <Example className="dark:bg-gray-950/50!">
        <div className="flex justify-center">
          <Button
            className={clsx(
              "rounded-md bg-indigo-600 px-5 py-2.5 text-sm leading-5 font-semibold text-white focus:outline-hidden",
              "data-hover:bg-indigo-500",
              "data-active:bg-indigo-700",
              "data-active:data-hover:bg-indigo-700",
              "data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-indigo-500",
            )}
          >
            Submit
          </Button>
        </div>
      </Example>

      <CodeExample
        className="hidden group-not-has-[[data-hover],[data-focus],[data-active]]:block"
        example={{
          lang: "html",
          // prettier-ignore
          code: html`
            <!-- Rendered \`Button\` -->
            <button class="bg-indigo-600 data-[active]:bg-indigo-700 data-[focus]:outline data-[hover]:bg-indigo-500 ...">
              Submit
            </button>
          `,
        }}
      />

      <CodeExample
        className="hidden group-has-data-hover:group-not-has-[[data-focus],[data-active]]:block"
        example={{
          lang: "html",
          // prettier-ignore
          code: html`
            <!-- Rendered \`Button\` -->
            <!-- [!code word:data-hover] -->
            <button data-hover class="bg-indigo-600 data-[active]:bg-indigo-700 data-[focus]:outline data-[hover]:bg-indigo-500 ...">
              Submit
            </button>
          `,
        }}
      />

      <CodeExample
        className="hidden group-has-data-focus:group-not-has-[[data-hover],[data-active]]:block"
        example={{
          lang: "html",
          // prettier-ignore
          code: html`
            <!-- Rendered \`Button\` -->
            <!-- [!code word:data-focus] -->
            <button data-focus class="bg-indigo-600 data-[active]:bg-indigo-700 data-[focus]:outline data-[hover]:bg-indigo-500 ...">
              Submit
            </button>
          `,
        }}
      />

      <CodeExample
        className="hidden group-has-data-active:group-not-has-[[data-hover],[data-focus]]:block"
        example={{
          lang: "html",
          // prettier-ignore
          code: html`
            <!-- Rendered \`Button\` -->
            <!-- [!code word:data-active] -->
            <button data-active class="bg-indigo-600 data-[active]:bg-indigo-700 data-[focus]:outline data-[hover]:bg-indigo-500 ...">
              Submit
            </button>
          `,
        }}
      />

      <CodeExample
        className="hidden group-has-data-hover:group-has-data-focus:block"
        example={{
          lang: "html",
          // prettier-ignore
          code: html`
            <!-- Rendered \`Button\` -->
            <!-- [!code word:data-focus] -->
            <!-- [!code word:data-hover] -->
            <button data-focus data-hover class="bg-indigo-600 data-[active]:bg-indigo-700 data-[focus]:outline data-[hover]:bg-indigo-500 ...">
              Submit
            </button>
          `,
        }}
      />

      <CodeExample
        className="hidden group-has-data-hover:group-has-data-active:block"
        example={{
          lang: "html",
          // prettier-ignore
          code: html`
            <!-- Rendered \`Button\` -->
            <!-- [!code word:data-active] -->
            <!-- [!code word:data-hover] -->
            <button data-active data-hover class="bg-indigo-600 data-[active]:bg-indigo-700 data-[focus]:outline data-[hover]:bg-indigo-500 ...">
              Submit
            </button>
          `,
        }}
      />
    </Figure>
  );
}
