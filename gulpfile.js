const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const filter       = require('gulp-filter');
const sass         = require('gulp-sass');
const csso         = require('gulp-csso');
const sourcemaps   = require('gulp-sourcemaps');

// Compile Sass to CSS
gulp.task('sass', function() {
    const autoprefixerOptions = {
        browsers: ['last 2 versions'],
    };

    const filterOptions = '**/*.css';

    const sassOptions = {
        includePaths: [

        ]
    };

    return gulp.src('./src/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(csso())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./src/'))
        .pipe(filter(filterOptions))
});

// Watch Sass files
gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['build', 'watch']);