const padNumber = (num) => {
    const stringified = num.toString();
    if (stringified.length < 2)
        return "0" + stringified;
    else
        return stringified;
}

const formatDate = (date) => {
    return `${padNumber(date.getDate())}/${padNumber(date.getMonth()+1)}-${padNumber(date.getFullYear())}`
}


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