// 引入gulp模块
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var less = require("gulp-less");
var cssClean = require("gulp-clean-css");

// 注册任务
// gulp.task('任务名', function () {
//    // 配置任务的操作
// });

// 注册合并压缩js的任务
gulp.task('js', function () {
    return gulp.src('src/js/*.js') // 找到目标原文件，将数据读取到gulp的内存
        .pipe(concat('build.js')) // 合并文件
        .pipe(gulp.dest('dist/js/')) // 临时输出文件到本地
        .pipe(uglify()) // 压缩文件
        .pipe(rename({suffix: '.min'})) // 重命名
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('less', function () {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
});

// 注册合并压缩css文件
gulp.task('css', function () {
   return gulp.src('src/css/*.css')
       .pipe(concat('build.css'))
       .pipe(rename({suffix: '.min'}))
       .pipe(cssClean({compatibility: 'ie8'}))
       .pipe(gulp.dest('dist/css/'));
});

// 注册默认任务
gulp.task('default', function () {
    
});