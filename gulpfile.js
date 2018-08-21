let gulp = require('gulp');
let sass = require('gulp-sass');

//1.创建任务
gulp.task('compileSass',function(){
    //2.找出sass文件
    gulp.src('./src/sass/*.scss')  //返回一个文件流

    //编译scss -> css
    .pipe(sass({outputStyle:'compact'}))  //得到文件流

    .pipe(gulp.dest('./src/css/'))  //输出到硬盘


});

//自动化编译
gulp.task('autoSass',function(){

    gulp.watch('./src/sass/*.scss',['compileSass']);
});

//默认任务
gulp.task('default',function(){
    console.log(999)
});