"use strict";
/* global require */

var gulp = require('gulp'),
    rimraf = require('gulp-rimraf');

var app = {
  cleanTarget: [
    'build/**/*'
  ],
  phaserLib: [
    'node_modules/phaser/build/p2.d.ts',
    'node_modules/phaser/build/phaser.comments.d.ts',
    'node_modules/phaser/build/phaser.d.ts',
    'node_modules/phaser/build/phaser.js',
    'node_modules/phaser/build/phaser.map',
    'node_modules/phaser/build/phaser.min.js',
    'node_modules/phaser/build/pixi.comments.d.ts',
    'node_modules/phaser/build/pixi.d.ts'
  ]
};

gulp.task('clean', function() {
  return gulp.src(app.cleanTarget, {read:false})
    .pipe(rimraf());
});

gulp.task('copyphaserlib', function() {
  // copy phaser files to lib directory
  gulp.src(app.phaserLib)
    .pipe(gulp.dest('lib'));
});

gulp.task('default', ['copyphaserlib']);
