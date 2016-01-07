var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch');


var files = ['index.html', 'style.css', 'scripts/**/*.js'];

gulp.task('files', function() {
  gulp.src(files).pipe(connect.reload());
});

// watch
gulp.task('watch', function() {
  gulp.watch(files, ['files']);
});

// Server
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch']);
