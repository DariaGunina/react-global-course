const DEV = 'dev';
const PROD = 'prod';

function buildConfig() {
    const env = process.env.NODE_ENV;
    try {
        return require(`./webpack.${env}.js`);
    } catch (e) {
        console.log(`Wrong webpack build parameter. Possible choices: ${DEV} or ${PROD}.`);
    }
};

module.exports = buildConfig;