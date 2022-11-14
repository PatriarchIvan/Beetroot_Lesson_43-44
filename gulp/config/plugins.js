import replace from 'gulp-replace'; //Шукає і змінює
import browserSync from 'browser-sync';
import webpackStream  from 'webpack-stream';
import webpack from 'webpack';

export const plugins = {
    replace: replace,
    browserSync: browserSync,
    webpackStream: webpackStream,
    webpack, webpack
}