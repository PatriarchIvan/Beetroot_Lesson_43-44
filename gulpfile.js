import gulp from 'gulp';

import { path } from './gulp/config/path.js';

import { plugins } from './gulp/config/plugins.js' 


global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}


// Імпорт тасків -----
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { server } from './gulp/tasks/server.js';


// Таска для слідкування за файлками ---------
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Сценарій виконання тасків -----
const mainTasks = gulp.parallel(copy, html,js, scss, images);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);