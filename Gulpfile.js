/**
 * Main gulpfile
 * @author: Jacek Dominiak
 * @copyright: Jacek Dominiak
 * @created: 13/01/15
 */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    traceur = require('gulp-traceur');

// scopes definitions
var src = [
    'app/src/*.js'
    , 'app/src/**/*.js'
];

var dist = [
    'app/dist/app-init.js'
    , 'app/dist/ApplicationConfig.js'
    , 'app/dist/**/*.js'
    , 'app/dist/app-wrapper.js'
];

// default task
gulp.task('default', ['traceur', 'concat']);

// watch task
gulp.task('watch', function () {
    gulp.watch(src, ['default']);
});

// traceur task
gulp.task('traceur', function () {
   gulp.src(src)
    .pipe(traceur())
    .pipe(gulp.dest('app/dist'));
});

// concat task
gulp.task('concat', function () {
    gulp.src(dist)
     .pipe(concat('app.js'))
     .pipe(gulp.dest('.'));
});

// uglify task
gulp.task('uglify', function () {
   gulp.src('app.js')
    .pipe(uglify({mangle: false}))
    .pipe(rename('app.min.js'));
});


