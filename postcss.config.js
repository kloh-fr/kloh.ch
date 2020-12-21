module.exports = {
  plugins: {
    autoprefixer: true,
    cssnano: {
      preset: "default",
    },
    "postcss-custom-properties": {
      importFrom: "./dist/styles/styles.css",
      exportTo: "./dist/styles/styles.css",
    },
  },
};
