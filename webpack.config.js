function buildConfig() {
    const env = process.env.NODE_ENV;
    if (env === 'dev' || env === 'prod') {
        return require(`./webpack.${env}.js`);
    } else {
        console.log("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.")
    }
}
module.exports = buildConfig;