
var gulp = require('gulp');
var rename = require('gulp-rename');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var reactTools = require('react-tools');
var through = require('through2');


gulp.task('build', function() {
  var build = require('./src/build');
  var data = require('./src/data');
  build(data);
});

gulp.task('util', function() {
  gulp.src('./src/components/util/*')
    .pipe(gulp.dest('./components/util'));
});

gulp.task('jsx', ['util'], function() {

  var reactify = function() {
    return through.obj(function(file, enc, cb) {
      var result = reactTools.transform(file.contents.toString());
      file.contents = new Buffer(result);
      this.push(file);
      cb();
    });
  };

  gulp.src('./src/components/*.jsx')
    .pipe(reactify())
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest('./components'));
});


gulp.task('js', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
  gulp.src('./src/app.js')
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('default', ['build', 'jsx', 'js', 'serve'], function() {
  gulp.watch(['./src/**/*'], ['build', 'jsx', 'js']);
});

