const path = require('path');
console.log(path.resolve(__dirname, 'dist/js'),);

module.exports = {
        mode: 'production',
        entry: './src/js/index.js',
        output: {
          path: path.resolve(__dirname, 'dist/js'),
          filename: 'app_min.js',
        },
}