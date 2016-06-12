// Many thanks!
// http://dev.classmethod.jp/cloud/aws/how-to-deploy-a-lambda-function-with-gulp/

var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');
var install = require('gulp-install');
var runSequence = require('run-sequence');
var awsLambda = require('node-aws-lambda');

gulp.task('clean', function(cb) {
  del(['./dist', './dist.zip'], cb);
});

gulp.task('js', function() {
  return gulp.src( ['index.js', 'config/*' ], { base: './' } )
    .pipe(gulp.dest('dist/'));
});

gulp.task('mods', function() {
  return gulp.src('./package.json')
    .pipe(gulp.dest('dist/'))
    .pipe(install({production: true}));
});

gulp.task('zip', function() {
  return gulp.src(['dist/**/*', '!dist/package.json'])
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'));
});

gulp.task('deploy', function(callback) {
  awsLambda.deploy('./dist.zip', require("./config/lambda-config.js"), callback);
});
