import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
}