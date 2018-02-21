const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.SPIKE_ENV

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'package-lock.json'],
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  entry: {
    'js/jquery.themepunch.tools.min': ['./assets/js/jquery.themepunch.tools.min.js'],
    'js/jquery.themepunch.revolution.min': ['./assets/js/jquery.themepunch.revolution.min.js'],
    'js/revolution.extension.actions.min': ['./assets/js/revolution.extension.actions.min.js'],
    'js/revolution.extension.carousel.min': ['./assets/js/revolution.extension.carousel.min.js'],
    'js/revolution.extension.kenburn.min': ['./assets/js/revolution.extension.kenburn.min.js'],
    'js/revolution.extension.layeranimation.min': ['./assets/js/revolution.extension.layeranimation.min.js'],
    'js/revolution.extension.migration.min': ['./assets/js/revolution.extension.migration.min.js'],
    'js/revolution.extension.navigation.min': ['./assets/js/revolution.extension.navigation.min.js'],
    'js/revolution.extension.parallax.min': ['./assets/js/revolution.extension.parallax.min.js'],
    'js/revolution.extension.slideanims.min': ['./assets/js/revolution.extension.slideanims.min.js'],
    'js/revolution.extension.video.min': ['./assets/js/revolution.extension.video.min.js'],
    'js/jquery.easing.1.3.js': ['./assets/js/jquery.easing.1.3.js'],
    'js/main': ['./assets/js/index.js']
  }
}
