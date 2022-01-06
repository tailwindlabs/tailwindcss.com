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
  ];
};
