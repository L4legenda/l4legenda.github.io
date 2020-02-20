const 
	gulp 		 = require("gulp"),
	sass 		 = require("gulp-sass"),
	autoprefixer = require('gulp-autoprefixer'),
	csso 		 = require('gulp-csso'),
	sourcemaps 	 = require('gulp-sourcemaps');


/* Watch */
gulp.task('watch', function(end) {
	gulp.watch(['../scss/**/*.scss'], gulp.series("scss"));
	end();
});

gulp.task("scss", function(){
	return gulp.src('../scss/style.scss')
	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../css'));
});