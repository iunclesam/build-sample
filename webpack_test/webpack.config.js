const path = require('path'); // node内置的模块用来设置路径的

module.exports = {
    entry: './src/js/entry.js', // 入口文件的位置
    output: {                   // 出口/输出的配置
        filename: 'bundle.js',   // 输出文件名
        // publicPath: 'js/',
        path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    }
};