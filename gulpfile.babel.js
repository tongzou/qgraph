'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import sourcemaps from 'gulp-sourcemaps';
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import webpackConfig from "./webpack.config.babel";

gulp.task('build', () => {
	return gulp.src( "src/index.js" )
		.pipe( webpack( webpackConfig ) )
		.pipe( gulp.dest( "./lib" ) )
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( uglify( {
			preserveComments: "license",
			compress: {
				/*eslint-disable */
				negate_iife: false
				/*eslint-enable */
			}
		} ) )
		.pipe( rename( "qd-utils.min.js" ) )
		.pipe( sourcemaps.write( "./" ) )
		.pipe( gulp.dest( "lib/" ) );
});
