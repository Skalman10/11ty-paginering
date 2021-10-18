const moment = require('moment');

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('dateFilter', (value) => {
        moment.locale;
        return moment(value).format('LL')
    })
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};