//gulpfile.js
var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task("watch", function(){
  gulp.watch('src/*.jsx', ['build'])
});

gulp.task('build', function () {
  browserify({
    entries: './src/dashboard.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
