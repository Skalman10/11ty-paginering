const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
    let url = "https://icanhazdadjoke.com/";

    /* This returns a promise */
    return Cache(url, {
        duration: "1d", // save for 1 day
        type: "json",    // we’ll parse JSON for you
        fetchOptions: {
            headers: {
                "Accept": "application/json"
        }
    }
});
};