var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');

gulp.task('less', function() {
    return gulp.src('client/app/*.less')
        .pipe(watch('client/app/*.less'))
        .pipe(less())
        .pipe(gulp.dest('client/app'));
});