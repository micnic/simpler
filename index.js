var cp = require('child_process');
var fs = require('fs');
var path = require('path');

// The file reloader
module.exports = function () {

	// Prepare the parameters
	var args = [];
	var callback;
	var path = arguments[0];

	// Take the arguments for the script
	if (Array.isArray(arguments[1])) {
		args = arguments[1];
	}

	// Get the callback
	if (typeof arguments[1] === 'function') {
		callback = arguments[1];
	} else if (typeof arguments[2] === 'function') {
		callback = arguments[2];
	}

	// Create the child process
	var child = cp.fork(path, args);

	// Watch file changes and reload script
	fs.watch(path, function (event, filename) {
		child.kill();
		child = cp.fork(path);

		// Use callback if it is defined
		if (callback) {
			callback();
		}
	});

	return child;
};