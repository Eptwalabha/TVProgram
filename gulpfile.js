var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var watch = require('gulp-watch');

var port = 3000;

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: "./",
            port: port
        }
    });
});

gulp.task('watch', function () {
    watch('*', reload);
});

gulp.task('default', ['serve', 'watch']);