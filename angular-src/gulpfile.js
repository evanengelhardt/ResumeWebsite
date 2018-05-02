const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass', function() {
  return gulp.src(['src/sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
})

gulp.task('serve', ['sass'], function() {
  gulp.watch(['src/sass/*.scss']);
})

gulp.task('default', ['serve']);
