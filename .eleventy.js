const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];
const getStringifiedMonth = (month) => months[month];
const formatDate = (date) => `${date.getDate()}. ${getStringifiedMonth(date.getMonth())} ${date.getFullYear()}`;

const filterOffsiteAnchors = (html) => html.replaceAll("<a href=\"http", "<a target=\"_blank\" rel=\"noreferrer noopener\" href=\"http");

const age = () => {
    const birthday = Date.UTC(2004, 4, 18);
    let ageInMilliseconds = Date.now() - birthday;
    let ageInYears = (ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(9);

    return ageInYears;
}

module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addPassthroughCopy({
        'src/misc': 'misc'
    });
    eleventyConfig.addPassthroughCopy({
        'src/images': 'images'
    });
    eleventyConfig.addPassthroughCopy({
        'src/js': 'js'
    });
    eleventyConfig.addPassthroughCopy({
        'src/fonts': 'fonts'
    });
    eleventyConfig.addPassthroughCopy({
        'src/favicon.ico': 'favicon.ico'
    });
    eleventyConfig.addPassthroughCopy({
        'src/manifest.json': 'manifest.json'
    });

    eleventyConfig.addNunjucksFilter("age", age);
    eleventyConfig.addNunjucksFilter("formattedDate", formatDate);
    eleventyConfig.addNunjucksFilter("lower", (value) => value.toLowerCase());
    eleventyConfig.addNunjucksFilter("filterOffsiteAnchors", filterOffsiteAnchors);

    eleventyConfig.addPlugin(syntaxHighlight);


    return {
        dir: {
            input: "src/layout",
            output: "public"
        }
    }
};
