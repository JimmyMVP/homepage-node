var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')

var paths = {
  scripts: ['public/javascripts/**/*.js', '!./public/javascripts/*bundle*'],
  scss: ['public/stylesheets/**/*.scss'],
  views: ['./views/**/*.jsx'],
  css: ['./public/stylesheets/**/*.css']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('scss',  ['reload'] ,function() {

  return gulp.src('./public/stylesheets/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(concat('bundle.min.css')).pipe(sourcemaps.write())
   .pipe(gulp.dest('public/stylesheets/'));

}); 

gulp.task('scripts', ['reload'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down

  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/javascripts/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  livereload.listen()
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.scss, ['scss'])
  gulp.watch(paths.views, ['reload'])
  gulp.watch(paths.css, ['reload'])
});

gulp.task('nodemon', function() {

    nodemon({
        script: 'index.js',
        ext: 'js',
    })

})


gulp.task('reload', function(){

    livereload.reload()

})


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts',"scss"]);