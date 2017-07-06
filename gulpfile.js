var gulp = require('gulp'),
	sync = require('browser-sync').create();

gulp.task('default', () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: '.'
		}
	});
	gulp.watch('index.html').on('change', sync.reload);
});