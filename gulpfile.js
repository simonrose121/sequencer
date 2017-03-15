var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('client/tsconfig.json');

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon', 'tsc'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["client/app/**.*"],
        browser: "google chrome",
        port: 7000,
	});
});

gulp.task('tsc', function() {
	// compile angular files
	gulp.src(["client/app/\*.ts"], { base: '.'})
		.pipe(tsProject())
		.pipe(gulp.dest('.'))

	gulp.src(["server/\*.ts", "\*.ts"], { base: '.'})
		.pipe(tsc({
			module: "commonjs",
          	target: "es6",
          	sourceMap: false
		}))
		.pipe(gulp.dest('.'))
});

gulp.task('watch', ['tsc'], function() {
    gulp.watch("client/app/\*.ts", ['tsc']);
    gulp.watch(["server/\*.ts", "\*.ts"], ['tsc']);	
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

gulp.task('less', function() {
    return gulp.src('client/app/*.less')
        .pipe(watch('client/app/*.less'))
        .pipe(less())
        .pipe(gulp.dest('client/app'));
});
