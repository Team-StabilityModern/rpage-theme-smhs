const gulp = require("gulp");

/**
 * Generate a CSS bundle from src.
 */
exports.css = () => {
  const postcss = require("gulp-postcss");
  const concat = require('gulp-concat');
  return gulp
    .src("src/**/*.css")
    .pipe(postcss([require("precss"), require("autoprefixer")]))
    .pipe(concat("all.css"))
    .pipe(gulp.dest("dist/"));
};
