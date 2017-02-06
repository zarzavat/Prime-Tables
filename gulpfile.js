var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('lint', function () {
    gutil.log('linting');
    return gulp.src(['**/*.js', '!node_modules/**', '!test/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', ['lint'], function () {
    gutil.log('testing');
    return gulp.src('test/*')
        .pipe(mocha());
});

var node, busy = false;
var fork = require('child_process').fork;
gulp.task('respawn', ['lint', 'test'], function () {
    gutil.log('trying to respawn');
    if (busy) { return; }

    function spawn() {
        node = fork('.', [7], { env: { NODE_ENV: 'development' } });
        busy = false;
    }

    if (node && node.connected) {
        busy = true;
        node.once('exit', spawn);
        node.kill();
    } else {
        spawn();
    }
});

gulp.task('serve', function () {
    gulp.watch('**/*.js', ['respawn']);
}); 