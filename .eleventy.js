const moment = require("moment");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/.htaccess");

  // https://www.11ty.dev/docs/collections/#getfilteredbyglob(-glob-)
  eleventyConfig.addCollection("articles", function (collection) {
    return collection.getFilteredByGlob("./src/articles/*.md");
  });

  eleventyConfig.addCollection("projects", function (collection) {
    return collection.getFilteredByGlob("./src/projets/*.md");
  });

  // date filter (localized)
  // https://jamstatic.fr/2019/09/07/site-multilingue-avec-eleventy/
  // https://momentjs.com/
  eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "fr";
    moment.locale(locale);

    return moment(date).format(format);
  });

  eleventyConfig.addNunjucksFilter("yearsToNow", function (date) {
    return moment().diff(date, "years");
  });

  eleventyConfig.addNunjucksFilter("timestamp", function (date) {
    // moment().format(date);
    return moment().utcOffset("+01:00").format(date);
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
