var gulp = require('gulp');
var watch = require('gulp-watch');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-css');
var uglify = require('gulp-uglify');
var minifyjs = require('gulp-js-minify');

/*
gulp.task('html', function(){
  return gulp.src('client/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('static/build/html'))
});*/

gulp.task('css', function(){
  return gulp.src('static/less/*.less')
    .pipe(less())/*
    .pipe(minifyCSS())*/
    .pipe(gulp.dest('static/build/css'))
});
gulp.task('script', function() {
    gulp.src('static/scripts/*.js')
    .pipe(uglify())
    .pipe(minifyjs())
    .pipe(gulp.dest('static/build/js'))
});

gulp.task('watch', function() {
  gulp.watch('static/less/*.less', ['css']);
  gulp.watch('static/scripts/*.js', ['script']);
});

gulp.task('default', ['watch', 'css', 'script' ]);