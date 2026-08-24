type ApiTableRow = [string, string];
type SafeAreaInset = "top" | "right" | "bottom" | "left";
type SafeAreaDeclaration = [property: string, inset: SafeAreaInset];
type SafeAreaGroup = [prefix: string, properties: SafeAreaDeclaration[]];

function safeArea(inset: SafeAreaInset) {
  return `var(--tw-safe-area-${inset}, env(safe-area-inset-${inset}))`;
}

function safeAreaValue(inset: SafeAreaInset, value?: string, negative = false) {
  const base = safeArea(inset);

  if (value === undefined) {
    return negative ? `calc(${base} * -1)` : base;
  }

  return negative ? `calc((${base} + ${value}) * -1)` : `calc(${base} + ${value})`;
}

function declarations(properties: SafeAreaDeclaration[], value?: string, negative = false) {
  return properties.map(([property, inset]) => `${property}: ${safeAreaValue(inset, value, negative)};`).join("\n");
}

function variableRows(groups: [string, SafeAreaInset[]][], valueForInset: (inset: SafeAreaInset) => string) {
  return groups.map(
    ([prefix, insets]) =>
      [prefix, insets.map((inset) => `--tw-safe-area-${inset}: ${valueForInset(inset)};`).join("\n")] as ApiTableRow,
  );
}

function spacingRows(
  groups: SafeAreaGroup[],
  { supportsNegative = false, supportsFractions = false } = {},
): ApiTableRow[] {
  const rows: ApiTableRow[] = [];

  for (const [prefix, properties] of groups) {
    rows.push([`${prefix}`, declarations(properties)]);
    rows.push([`${prefix}-<number>`, declarations(properties, "calc(var(--spacing) * <number>)")]);

    if (supportsFractions) {
      rows.push([`${prefix}-<fraction>`, declarations(properties, "calc(<fraction> * 100%)")]);
    }

    rows.push([`${prefix}-px`, declarations(properties, "1px")]);
    rows.push([`${prefix}-(<custom-property>)`, declarations(properties, "var(<custom-property>)")]);
    rows.push([`${prefix}-[<value>]`, declarations(properties, "<value>")]);

    if (!supportsNegative) continue;

    rows.push([`-${prefix}`, declarations(properties, undefined, true)]);
    rows.push([`-${prefix}-<number>`, declarations(properties, "calc(var(--spacing) * <number>)", true)]);

    if (supportsFractions) {
      rows.push([`-${prefix}-<fraction>`, declarations(properties, "calc(<fraction> * 100%)", true)]);
    }

    rows.push([`-${prefix}-px`, declarations(properties, "1px", true)]);
    rows.push([`-${prefix}-(<custom-property>)`, declarations(properties, "var(<custom-property>)", true)]);
    rows.push([`-${prefix}-[<value>]`, declarations(properties, "<value>", true)]);
  }

  return rows;
}

const controlRows = variableRows(
  [
    ["safe", ["top", "right", "bottom", "left"]],
    ["safe-x", ["right", "left"]],
    ["safe-y", ["top", "bottom"]],
    ["safe-t", ["top"]],
    ["safe-r", ["right"]],
    ["safe-b", ["bottom"]],
    ["safe-l", ["left"]],
  ],
  (inset) => `env(safe-area-inset-${inset})`,
);

const resetRows = variableRows(
  [
    ["safe-none", ["top", "right", "bottom", "left"]],
    ["safe-x-none", ["right", "left"]],
    ["safe-y-none", ["top", "bottom"]],
    ["safe-t-none", ["top"]],
    ["safe-r-none", ["right"]],
    ["safe-b-none", ["bottom"]],
    ["safe-l-none", ["left"]],
  ],
  () => "0px",
);

const insetRows = spacingRows(
  [
    [
      "inset-safe",
      [
        ["top", "top"],
        ["right", "right"],
        ["bottom", "bottom"],
        ["left", "left"],
      ],
    ],
    [
      "inset-x-safe",
      [
        ["right", "right"],
        ["left", "left"],
      ],
    ],
    [
      "inset-y-safe",
      [
        ["top", "top"],
        ["bottom", "bottom"],
      ],
    ],
    ["top-safe", [["top", "top"]]],
    ["right-safe", [["right", "right"]]],
    ["bottom-safe", [["bottom", "bottom"]]],
    ["left-safe", [["left", "left"]]],
  ],
  { supportsNegative: true, supportsFractions: true },
);

const marginRows = spacingRows(
  [
    [
      "m-safe",
      [
        ["margin-top", "top"],
        ["margin-right", "right"],
        ["margin-bottom", "bottom"],
        ["margin-left", "left"],
      ],
    ],
    [
      "mx-safe",
      [
        ["margin-right", "right"],
        ["margin-left", "left"],
      ],
    ],
    [
      "my-safe",
      [
        ["margin-top", "top"],
        ["margin-bottom", "bottom"],
      ],
    ],
    ["mt-safe", [["margin-top", "top"]]],
    ["mr-safe", [["margin-right", "right"]]],
    ["mb-safe", [["margin-bottom", "bottom"]]],
    ["ml-safe", [["margin-left", "left"]]],
  ],
  { supportsNegative: true },
);

const paddingRows = spacingRows([
  [
    "p-safe",
    [
      ["padding-top", "top"],
      ["padding-right", "right"],
      ["padding-bottom", "bottom"],
      ["padding-left", "left"],
    ],
  ],
  [
    "px-safe",
    [
      ["padding-right", "right"],
      ["padding-left", "left"],
    ],
  ],
  [
    "py-safe",
    [
      ["padding-top", "top"],
      ["padding-bottom", "bottom"],
    ],
  ],
  ["pt-safe", [["padding-top", "top"]]],
  ["pr-safe", [["padding-right", "right"]]],
  ["pb-safe", [["padding-bottom", "bottom"]]],
  ["pl-safe", [["padding-left", "left"]]],
]);

const scrollMarginRows = spacingRows(
  [
    [
      "scroll-m-safe",
      [
        ["scroll-margin-top", "top"],
        ["scroll-margin-right", "right"],
        ["scroll-margin-bottom", "bottom"],
        ["scroll-margin-left", "left"],
      ],
    ],
    [
      "scroll-mx-safe",
      [
        ["scroll-margin-right", "right"],
        ["scroll-margin-left", "left"],
      ],
    ],
    [
      "scroll-my-safe",
      [
        ["scroll-margin-top", "top"],
        ["scroll-margin-bottom", "bottom"],
      ],
    ],
    ["scroll-mt-safe", [["scroll-margin-top", "top"]]],
    ["scroll-mr-safe", [["scroll-margin-right", "right"]]],
    ["scroll-mb-safe", [["scroll-margin-bottom", "bottom"]]],
    ["scroll-ml-safe", [["scroll-margin-left", "left"]]],
  ],
  { supportsNegative: true },
);

const scrollPaddingRows = spacingRows([
  [
    "scroll-p-safe",
    [
      ["scroll-padding-top", "top"],
      ["scroll-padding-right", "right"],
      ["scroll-padding-bottom", "bottom"],
      ["scroll-padding-left", "left"],
    ],
  ],
  [
    "scroll-px-safe",
    [
      ["scroll-padding-right", "right"],
      ["scroll-padding-left", "left"],
    ],
  ],
  [
    "scroll-py-safe",
    [
      ["scroll-padding-top", "top"],
      ["scroll-padding-bottom", "bottom"],
    ],
  ],
  ["scroll-pt-safe", [["scroll-padding-top", "top"]]],
  ["scroll-pr-safe", [["scroll-padding-right", "right"]]],
  ["scroll-pb-safe", [["scroll-padding-bottom", "bottom"]]],
  ["scroll-pl-safe", [["scroll-padding-left", "left"]]],
]);

const viewportHeightRows: ApiTableRow[] = [];

for (const [prefix, property] of [
  ["h", "height"],
  ["min-h", "min-height"],
  ["max-h", "max-height"],
] satisfies ApiTableRow[]) {
  for (const [viewport, value] of [
    ["screen", "100vh"],
    ["dvh", "100dvh"],
    ["lvh", "100lvh"],
    ["svh", "100svh"],
  ] satisfies ApiTableRow[]) {
    viewportHeightRows.push([
      `${prefix}-${viewport}-safe`,
      `${property}: calc(${value} - (${safeArea("top")} + ${safeArea("bottom")}));`,
    ]);
  }
}

export const safeAreaRows = [
  ...controlRows,
  ...resetRows,
  ...insetRows,
  ...marginRows,
  ...paddingRows,
  ...scrollMarginRows,
  ...scrollPaddingRows,
  ...viewportHeightRows,
];
