'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

// Development image build
exports.development = function() {
  return gulp.src(config.img.src)
    .pipe(gulp.dest(config.img.dest));
}

// Production image build
exports.production = function() {
  return gulp.src(config.img.src)
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.jpegtran(),
      imagemin.optipng(),
      imagemin.svgo({
       plugins: [
         { removeUselessDefs: false },
         { cleanupIDs: false}
       ]
     })
    ]))
    .pipe(gulp.dest(config.img.dest));
}