var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var nodemon = require('gulp-nodemon');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('client/tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');

function swallowError(error) {
	console.log(error.toString())
	this.emit('end')
}

gulp.task('default', ['watch']);

gulp.task('tsc-client', function() {
	gulp.src(["client/app/\*.ts", "client/app/models/\*.ts"], { base: '.'})
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

gulp.task('less', function() {
    return gulp.src('client/app/*.less')
        .pipe(less())
		.on('error', swallowError)
        .pipe(gulp.dest('client/app'))
});

gulp.task('watch', function() {
	//gulp.watch(["server/\*\*/\*.ts", "\*.ts", "shared/\*\*/\*.ts"], ['tsc-server'], { interval: 500 });
	gulp.watch(["client/app/\*.ts", "client/app/models/\*.ts"], ['tsc-client'], { interval: 500 });
	gulp.watch(["client/app/\*.less"], ['less'], { interval: 500 });	
});

gulp.task('nodemon', ['tsc-server', 'tsc-client', 'less'], function (cb) {
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
