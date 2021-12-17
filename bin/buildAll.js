const run = require('parallel-webpack').run
const configPath = require.resolve('./webpack.config.js')

run(configPath, {
    watch: false,
    maxRetries: 1,
    stats: true
});