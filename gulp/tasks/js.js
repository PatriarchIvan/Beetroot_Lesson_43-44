import path from 'path'
import webpack from 'webpack';

// export const webP = () => webpack({
//     mode: 'development',
    // entry: './dist/js/index.js',
    // output: {
        //   path: path.resolve('.../', 'dist/js'),
//         path: app.path.build.js,
//         filename: 'app_min.js',
//     },
// });

export const js = () => {
    console.log(app.path.src.js);
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.browserSync.stream())
        // .pipe(webpack({
        //     mode: 'production',
        //     // entry: './dist/js/index.js',
        //     output: {
        //         //   path: path.resolve('.../', 'dist/js'),
        //         // path: app.path.build.js,
        //         filename: 'app_min.js',
        //     },
        // }))
        .pipe(app.gulp.dest(app.path.build.js))
        // .pipe(app.plugins.webpack({
        //     // mode: 'development',
        //     entry: './src/index.js',
        //     output: {
        //         path: path.resolve('', 'dist/js'),
        //         filename: 'app_min.js',
        //     },
        // }))


    // 
    // .pipe(webpack({
    //             mode: 'development',
    //             ouput: {
    //                 filename: 'app.min.js'
    //             }
    //         }))
}