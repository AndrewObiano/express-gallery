const gulp = require("gulp");
const watch = require("gulp-watch");
const sass = require("gulp-sass");
gulp.task("default", () => {
  watch("./sass/**/*.scss", () => {
    gulp
      .src("./sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("./public/css"));
  });
});
