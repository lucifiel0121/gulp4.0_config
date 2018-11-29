const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    var processors = [
        // 定義 postCSS 所需要的元件
        autoprefixer({ browsers: ['last 5 version'] }), // 使用 autoprefixer，這邊定義最新的五個版本瀏覽器
    ];
    return gulp
        .src('./source/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(postcss(processors)) // 將 PostCSS 插入流程
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./source'));
});
gulp.task('watch', function() {
    gulp.watch('./source/scss/**/*.scss',gulp.series('sass'));
});
gulp.task('default', gulp.series('sass', 'watch'));

