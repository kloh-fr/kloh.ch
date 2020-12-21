const moment = require("moment");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  // date filter (localized)
  // https://jamstatic.fr/2019/09/07/site-multilingue-avec-eleventy/
  // https://momentjs.com/
  eleventyConfig.addNunjucksFilter("yearsToNow", function (date) {
    return moment().diff(date, "years");
  });


  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk",
  };
};
