var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');

gulp.task('less', function() {
    return gulp.src('app/*.less')
        .pipe(watch('app/*.less'))
        .pipe(less())
        .pipe(gulp.dest('app'));
});