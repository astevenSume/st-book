var gulp = require('gulp'),
    tslint = require('gulp-tslint'),
    ts = require("gulp-typescript"),
    browserify = require('browserify'),
    source= require('vinyl-source-stream'),
    buffer= require('vinyl-buffer'),
    transform = require('vinyl-transform'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');
    // require('./temp/source/js/main');

var browserified = transform(function(filename){
  var b = browserify({entries: filename, debug: true});
  return b.bundle();
});
//这个ok
gulp.task('bundle-js-other', function(){
  var b = browserify({entries: './temp/source/js/main.js', debug: true});
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/source/js/'));
});
gulp.task('bundle-test-other', function(){
  var b = browserify({entries: './temp/test/main.test.js', debug: true});
  return b.bundle()
    .pipe(source('test.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/test/'));
});

gulp.task('bundle-js', function(){
  return gulp.src('./temp/source/js/main.js')
    .pipe(browserified)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/source/js/'))
});
gulp.task('bundle-test',function(){
  return gulp.src('./temp/source/**/**.js')
    .pipe(browserified)
    .pipe(gulp.dest('./dist/test/'))
});

gulp.task('lint',function(){
  return gulp.src(['./source/ts/**/**.ts','./test/**/**.test.ts']).pipe(tslint({
    formatter: 'verbose'
  })).pipe(tslint.report());
});

var tsProject = ts.createProject({
  removeComments : true,
  noImplicitAny : true,
  target : 'ES3',
  module : 'commonjs',
  declarationFiles: false
});
var tsTestProject = ts.createProject({
  removeComments : true,
  noImplicitAny : true,
  target : 'ES3',
  module : 'commonjs',
  declarationFiles: false
});

gulp.task('tsc', function(){
  return gulp.src('./source/ts/**/**.ts').pipe(tsProject()).js.pipe(gulp.dest('./temp/source/js'));
});

gulp.task('tsc-tests', function(){
  return gulp.src('./test/**/**.test.ts').pipe(tsTestProject()).js.pipe(gulp.dest('./temp/test/'));
});


gulp.task('default', gulp.series('lint','tsc','tsc-tests', 'bundle-js-other','bundle-test-other'));
