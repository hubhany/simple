var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix({ browsers: ['last 50 versions', '> 0.5%', 'Firefox ESR', 'Firefox <= 20'] });
var browserSync = require('browser-sync').create();

gulp.task('less', function () {
    return gulp.src('assets/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('assets/dist/css'));
});

gulp.task('prefix', function () {
    return gulp.src('assets/css/*.css')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('assets/dist/css'));
});

gulp.task('default', function () {
    browserSync.init({
      server: "./"
  });
    gulp.watch('assets/less/**/*.less', gulp.series('less'));
    gulp.watch('assets/css/*.css', gulp.series('prefix'));
    browserSync.reload();
  });