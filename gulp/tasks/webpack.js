import webpack from "webpack";
import webpackStream from "webpack-stream";
import path from 'path';
import gulp from 'gulp';

 export const webP = () => {
    return webpackStream({
            mode: 'production',
            entry: './src/js/index.js',
            output: {
                path: path.resolve(app.path.build.js, 'dist/js'),
                filename: 'app_min.js',
            }},)
        .pipe(gulp.dest(`${app.path.build.js}`));
};
