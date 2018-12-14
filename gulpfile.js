var gulp = require('gulp'),
    tslint = require('gulp-tslint'),
    ts = require("gulp-typescript"),
    browserify = require('browserify'),
    source= require('vinyl-source-stream'),
    buffer= require('vinyl-buffer'),
    transform = require('vinyl-transform'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps')
    browserSync = require('browser-sync').create();


var Server = require('karma').Server;

    // karma = require('gulp-karma');
    // require('./temp/source/js/main');

gulp.task('karma', function(done){
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(exitCode){
    console.log('Karmas has exited with ' + exitCode);
    done();
    // process.exit(exitCode);
  }).start();

});

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

// gulp.task('bundle-js', function(){
//   return gulp.src('./temp/source/js/main.js')
//     .pipe(browserified)
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(uglify())
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./dist/source/js/'))
// });
// gulp.task('bundle-test',function(){
//   return gulp.src('./temp/source/**/**.js')
//     .pipe(browserified)
//     .pipe(gulp.dest('./dist/test/'))
// });

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

gulp.task('tsc-tests', function(){
  return gulp.src('./test/**/**.ts').pipe(tsTestProject()).js.pipe(gulp.dest('./temp/test/'));
});

gulp.task('tsc', function(){
  return gulp.src('./source/ts/**/**.ts').pipe(tsProject()).js.pipe(gulp.dest('./temp/source/js'));
});

gulp.task('browser-sync',function(done){
  browserSync.init({
    server: {baseDir:"./dist", index: "index.html"},
    port:10223
  });
  gulp.watch('./dist/test/css/main.css', bundlest);
  // gulp.watch('./dist/index.html').on('change', browserSync.reload);
  gulp.watch('./dist/global.js').on('change', browserSync.reload);
  gulp.watch('./dist/g.css').on('change', browserSync.reload);

  done();
})

function bundlest(done){
  console.log(334444);

  var b = browserify({entries: './temp/test/main.test.js', debug: true});
     b.bundle()
    .pipe(source('test.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/test/'));

  done();
}
gulp.task('watch', function(done){
  gulp.watch('./dist/**/*', bundlest);
  done();
});

// gulp.task('default', gulp.series('lint',['tsc-tests','tsc'],['bundle-js-other','bundle-test-other'], 'karma',
//                        'watch','browser-sync'));
gulp.task('default', gulp.series('lint',['tsc-tests','tsc'],['bundle-js-other','bundle-test-other'],'browser-sync'));
