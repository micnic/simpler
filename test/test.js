var simpler = require('simpler');

var reloader = simpler('script.js', ['test'], function (process) {
	testProcess = process;
    console.log('Script reloaded');
});

reloader.stop().start(['test2']);