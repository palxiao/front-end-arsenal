const webpack = require('webpack')
const chalk = require('chalk');
const createConfig = require('./createConfig')

const args = process.argv.slice(2)

if (args.length <= 0) {
    console.log(chalk.bgRed.black('请输入指定的包名，否则请使用【npm run build:all】命令来打所有的包'))
    process.exit(-1)
}

webpack(createConfig(args), (err, stats) => {
    process.stdout.write(stats.toString() + '\n')
})