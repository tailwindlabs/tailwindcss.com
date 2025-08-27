// Note: can run these tests with `bun test`

import { describe, test } from "node:test";
import { stripShikiComments } from "./shiki";
import dedent from "dedent";

describe("comment removal", () => {
  test("at end of line", (t) => {
    let input = dedent`
      keep me # [!code highlight]
      keep me /* [!code highlight] */
      keep me // [!code highlight]
      keep me <!-- [!code highlight] -->
    `;

    t.assert.equal(
      stripShikiComments(input),
      dedent`
        keep me \n\
        keep me \n\
        keep me \n\
        keep me \
      `,
    );
  });

  test("on separate lines", (t) => {
    let input = dedent`
      # [!code highlight]
      /* [!code highlight] */
      // [!code highlight]
      <!-- [!code highlight] -->
      <div class="flex"></div>
    `;

    t.assert.equal(
      stripShikiComments(input),
      dedent`
        <div class="flex"></div>
      `,
    );
  });

  test("on separate lines (prettier)", (t) => {
    let input = dedent`
      # prettier-ignore
      /* prettier-ignore */
      // prettier-ignore
      <!-- prettier-ignore -->
      <div class="flex"></div>
    `;

    t.assert.equal(
      stripShikiComments(input),
      dedent`
        <div class="flex"></div>
      `,
    );
  });
});

// [!code --] and [!code --:N] handling
describe("line removal", () => {
  test("at end of line", (t) => {
    let input = dedent`
      keep me
      remove me 1 # [!code --]
      keep me
    `;

    t.assert.equal(
      stripShikiComments(input),
      dedent`
        keep me
        keep me
      `,
    );
  });

  test("on separate lines", (t) => {
    let input = dedent`
      keep me
      # [!code --:3]
      remove me 1
      remove me 2
      keep me
    `;

    t.assert.equal(
      stripShikiComments(input),
      dedent`
        keep me
        keep me
      `,
    );
  });

  test("an invalid number still removes the line its on", (t) => {
    let input = dedent`
      keep me
      remove me # [!code --:foo]
      keep me
    `;

    t.assert.equal(
      stripShikiComments(input),
      dedent`
        keep me
        keep me
      `,
    );
  });

  test("an invalid number is ignored on separate lines", (t) => {
    let input = dedent`
      keep me
      # [!code --:foo]
      keep me
    `;

    t.assert.equal(
      stripShikiComments(input),
      dedent`
        keep me
        keep me
      `,
    );
  });
});
