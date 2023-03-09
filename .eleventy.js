module.exports = function (eleventyConfig) {
  return {
    templateFormats: ['njk'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: "public",
      layouts: "_layouts",
    },
  }
}