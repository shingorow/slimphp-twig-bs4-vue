let mix = require('laravel-mix');

mix.js('source/js/index.js', 'public/js')
  .autoload({
    "popper.js": ['Popper', 'window.Popper', 'popper', 'window.popper'],
    jquery: ['$', 'window.jQuery']
  })
  .sass('source/sass/index.scss', 'public/css');