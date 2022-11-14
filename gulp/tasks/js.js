// export const js = () => {
//     return app.gulp.src(app.path.src.js)
//     .pipe(webpack({
//         mode: 'development',
//         ouput: {
//             filename: 'app.min.js'
//         }
//     }))
//     .pipe(app.plugins.webpackStream())
//     .pipe(app.gulp.dest(app.path.build.js))
// };

export const js = () => {
    console.log(app.path.src.js);
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.browserSync.stream())
        // .pipe(app.plugins.webpack({
        //     mode: 'development',
        //     output: {
        //         filename: 'app.min.js'
        //     }
        // }))
        .pipe(app.gulp.dest(app.path.build.js))
    // .pipe(webpack({
    //             mode: 'development',
    //             ouput: {
    //                 filename: 'app.min.js'
    //             }
    //         }))
}