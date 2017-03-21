var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var tsc = require('gulp-typescript');
var runSequence = require('run-sequence');
var tsProject = tsc.createProject('client/tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './client'
		}
	});
});

gulp.task('tsc', ['tsc-client', 'tsc-server'], function(callback) {
});

gulp.task('tsc-client', function() {
	gulp.src(["client/app/\*.ts", "client/models/\*.ts"], { base: '.'})
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('.'))
});

gulp.task('tsc-server', function() {
	gulp.src(["server/\*\*/\*.ts", "\*.ts", "shared/\*\*/\*.ts"], { base: '.'})
		.pipe(tsc({
			module: "commonjs",
          	target: "es6",
          	sourceMap: false
		}))
		.pipe(gulp.dest('.'))
});

gulp.task('watch-server', function() {
	gulp.watch(["server/\*.ts", "\*.ts", "shared/\*.ts"], ['tsc-server']);
});

gulp.task('watch-client', function() {
	gulp.watch(["client/app/\*.ts", "client/models/\*.ts"], ['tsc-client']);
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
