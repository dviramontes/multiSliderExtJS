var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', connect.server({
    root: ['./'],
    port: 1337,
    livereload: true,
    open: {
        browser: 'google chrome' // if not working OS X browser: 'Google Chrome'
    }
}));

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./app/stylus/*.styl'], ['stylus']);
});

gulp.task('default', ['connect', 'watch']);
