var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var gutil = require('gulp-util');

gulp.task('less', function() {
    return gulp.src('')
        .pipe(watch('app/*.less'))
        .pipe(less())
        .pipe(gulp.dest('app'));
});