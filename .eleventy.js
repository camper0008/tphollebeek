const months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];
const getStringifiedMonth = (month) => months[month];
const formatDate = (date) => `${date.getDate()}. ${getStringifiedMonth(date.getMonth())} ${date.getFullYear()}`;


module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy({'src/images': 'images'});
    eleventyConfig.addPassthroughCopy({'src/fonts': 'fonts'});
    eleventyConfig.addNunjucksFilter("formattedDate", function(value) { return formatDate(value) });
    // Return your Object options:
    return {
      dir: {
        input: "src/layout",
        output: "public"
      }
    }
  };