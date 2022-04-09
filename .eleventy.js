const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];
const getStringifiedMonth = (month) => months[month];
const formatDate = (date) => `${date.getDate()}. ${getStringifiedMonth(date.getMonth())} ${date.getFullYear()}`;

const filterOffsiteAnchors = (html) => html.replaceAll("<a href=\"http", "<a target=\"_blank\" rel=\"noreferrer noopener\" href=\"http");

module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    
    eleventyConfig.addPassthroughCopy({'src/misc': 'misc'});
    eleventyConfig.addPassthroughCopy({'src/images': 'images'});
    eleventyConfig.addPassthroughCopy({'src/fonts': 'fonts'});
    eleventyConfig.addPassthroughCopy({'src/favicon.ico': 'favicon.ico'});
    eleventyConfig.addPassthroughCopy({'src/manifest.json': 'manifest.json'});
    
    eleventyConfig.addNunjucksFilter("formattedDate", formatDate );
    eleventyConfig.addNunjucksFilter("lower", (value) => value.toLowerCase() );
    eleventyConfig.addNunjucksFilter("filterOffsiteAnchors", filterOffsiteAnchors );
    
    eleventyConfig.addPlugin(syntaxHighlight);
   
    return {
      dir: {
        input: "src/layout",
        output: "public"
      }
    }
  };
