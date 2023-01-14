const path = require('path');
module.exports = {
    mode:"development",  
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'production'),
      filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      devServer: {
        compress: true,
        port: 9000,
      }}