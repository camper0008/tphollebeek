module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy({'src/images': 'images'});
    eleventyConfig.addPassthroughCopy({'src/fonts': 'fonts'});
    // Return your Object options:
    return {
      dir: {
        input: "src/layout",
        output: "public"
      }
    }
  };