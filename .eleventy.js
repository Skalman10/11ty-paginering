const moment = require('moment');

module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
eleventyConfig.addFilter('dateFilter', (value) => {
    moment.locale;
    return moment(value).format('LL')
})