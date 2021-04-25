const gulp = require("gulp");

/**
 * Generate a CSS bundle from src.
 */
exports.css = () => {
  const postcss = require("gulp-postcss");
  const concat = require("gulp-concat");
  const gulpStylelint = require("gulp-stylelint");

  return gulp
    .src("src/**/*.css")
    .pipe(
      gulpStylelint({
        reporters: [{ formatter: "string", console: true }],
      })
    )
    .pipe(
      postcss([
        require("precss"),
        require("autoprefixer"),
        require("cssnano")({
          preset: "default",
        }),
      ])
    )
    .pipe(concat("all.css"))
    .pipe(gulp.dest("dist/"));
};
