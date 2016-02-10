var gulp       = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch("./js/*.json").on('change', browserSync.reload);
    gulp.watch("./modules/**/*.js").on('change', browserSync.reload);
    gulp.watch("./css/*.css").on('change', browserSync.reload);
    gulp.watch("./modules/**/*.html").on('change', browserSync.reload);
    gulp.watch("app.js").on('change', browserSync.reload);
});

gulp.task('default',['serve']);