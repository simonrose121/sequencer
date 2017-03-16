var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var tsc = require('gulp-typescript');
var runSequence = require('run-sequence');
var tsProject = tsc.createProject('client/tsconfig.json');

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: "http://localhost:5000",
		browser: "google chrome",
		port: 7000
	});
});

gulp.task('tsc', function(callback) {
	runSequence('less', 'tsc-client', 'tsc-server');
});

gulp.task('tsc-client', function() {
	gulp.src(["client/app/\*.ts"], { base: '.'})
		.pipe(tsProject())
		.pipe(gulp.dest('.'))
});

gulp.task('tsc-server', function() {
	gulp.src(["server/\*.ts", "\*.ts"], { base: '.'})
		.pipe(tsc({
			module: "commonjs",
          	target: "es6",
          	sourceMap: false
		}))
		.pipe(gulp.dest('.'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', ['browser-sync', 'nodemon'], function() {
	gulp.watch(["client/app/\*.ts", "server/\*.ts", "\*.ts", 'client/app/*.less'], ['tsc']);
});

gulp.task('less', function() {
    return gulp.src('client/app/*.less')
        .pipe(less())
        .pipe(gulp.dest('client/app'))
});

gulp.task('nodemon', function (cb) {
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});
