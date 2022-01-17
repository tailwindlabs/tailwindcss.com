module.exports = () => {
  return [
    {
      test: /Header\.js$/,
      loader: "string-replace-loader",
      options: {
        search: "Components",
        replace: "元件",
      },
    },
    {
      test: /\.mdx$/,
      loader: "./file-replacer",
      options: {
        base: "./translated",
        replacement: {
          "editor-setup.mdx": "editor-setup.mdx",
        },
      },
    },
    {
      test: /documentation\.js$/,
      loader: "./file-replacer",
      options: {
        replacement: {
          "documentation.js": "./translated/navs/documentation.js",
        },
      },
    },
    {
      test: /components[\/+\\+]home[\/+\\+]\w*\.js$/,
      loader: "./file-replacer",
      options: {
        base: "./translated/components/home",
        replacement: {
          "Hero.js": "Hero.js",
        },
      },
    },
  ];
};
