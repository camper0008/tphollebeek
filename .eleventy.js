module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    // Return your Object options:
    return {
      dir: {
        input: "src/website",
        output: "public"
      }
    }
  };