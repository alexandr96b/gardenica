const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const sass = require('gulp-sass')(require('sass'));

exports.libs_style = tasks.libs_style;
/*exports.svg_css = tasks.svg_css;*/
exports.style = tasks.style;
exports.build_js = tasks.build_js;
exports.libs_js = tasks.libs_js;
exports.dev_js = tasks.dev_js;
/*exports.html = tasks.html;*/
/*exports.php = tasks.php;*/
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
/*exports.svg_sprite = tasks.svg_sprite;*/
/*exports.bs_html = tasks.bs_html;
exports.bs_php = tasks.bs_php;*/
exports.watch = tasks.watch;
exports.deploy = tasks.deploy;

exports.default = gulp.parallel(
  exports.libs_style,
  /*exports.svg_css,*/
  exports.style,
  exports.libs_js,
  exports.dev_js,
  exports.rastr,
  exports.webp,
  /*exports.svg_sprite,*/
/*  exports.html,
  exports.bs_html,*/
  exports.watch
)
exports.dev_php = gulp.parallel(
  exports.libs_style,
  /*exports.svg_css,*/
  exports.style,
  exports.libs_js,
  exports.dev_js,
  exports.rastr,
  exports.webp,
  /*exports.svg_sprite,*/
/*  exports.php,
  exports.bs_php,*/
  exports.watch
)
