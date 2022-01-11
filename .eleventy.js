const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];
const getStringifiedMonth = (month) => months[month];
const formatDate = (date) => `${date.getDate()}. ${getStringifiedMonth(date.getMonth())} ${date.getFullYear()}`;

module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    
    eleventyConfig.addPassthroughCopy({'src/images': 'images'});
    eleventyConfig.addPassthroughCopy({'src/fonts': 'fonts'});
    eleventyConfig.addPassthroughCopy({'src/favicon.ico': 'favicon.ico'});
    
    eleventyConfig.addNunjucksFilter("formattedDate", (value) => formatDate(value) );
    eleventyConfig.addNunjucksFilter("lower", (value) => value.toLowerCase() );
    
    eleventyConfig.addPlugin(syntaxHighlight);
   
    return {
      dir: {
        input: "src/layout",
        output: "public"
      }
    }
  };
