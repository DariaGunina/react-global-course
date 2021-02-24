function buildConfig() {
    const env = process.env.NODE_ENV;
    try {
        return require(`./webpack.${env}.js`);
    } catch (e) {
        console.log("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.");
    }
};

module.exports = buildConfig;