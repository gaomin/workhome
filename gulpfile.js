var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
 
gulp.task('default', ['concatjs','min.concatjs']);

gulp.task('concatjs', function() {
  return gulp.src([
    './lib/js/core/jquery-1.11.3.js',
    './lib/js/core/require.js',
    './lib/js/core/require_config.js'
    ])
    //.pipe(uglify())
    .pipe(concat('base.js'))
    .pipe(gulp.dest('./lib/js/'));
});

gulp.task('min.concatjs', function() {
  return gulp.src([
    './lib/js/core/jquery-1.11.3.js',
    './lib/js/core/require.js',
    './lib/js/core/require_config.js'
    ])
    .pipe(uglify())
    .pipe(concat('base.min.js'))
    .pipe(gulp.dest('./lib/js/'));
});


