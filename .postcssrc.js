// https://github.com/michael-ciniawsky/postcss-load-config
var tailwindcss = require('tailwindcss');

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    tailwindcss('./path/to/your/tailwind-config.js'),
    require('autoprefixer')
  }
}
