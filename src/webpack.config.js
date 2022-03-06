
module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    devtool: 'incline-source-map',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
    }
}