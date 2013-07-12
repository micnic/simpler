var cp = require('child_process'),
	fs = require('fs');

// SimpleR prototype constructor
simpler = function (path, args, callback) {

	Object.defineProperties(this, {
		args: {
			value: [],
			writable: true
		},
		callback: {
			value: null,
			writable: true
		},
		child: {
			value: null,
			writable: true
		},
		path: {
			value: path
		}
	});

	// Start the script reloader
	this.start(args, callback);
};

// Start or restart the script reloading
simpler.prototype.start = function (args, callback) {

	var that = this;

	// Get the provided parameters
	if (typeof args === 'function') {
		callback = args;
		args = [];
	} else {
		args = args || [];
	}

	this.args = args || this.args;
	this.callback = callback || this.callback;

	// If the child process exists then kill it
	if (this.child) {
		this.child.kill();
	}

	// Create the child process
	this.child = cp.fork(this.path, this.args);

	// Watch file changes and reload script
	fs.watchFile(this.path, {
		persistent: true
	}, function (current, previous) {

		// Kill the child process
		that.child.kill();

		// If the file is removed stop watching it
		if (!current.nlink) {
			fs.unwatchFile(that.path);
		} else {

			// Create a new child process
			that.child = cp.fork(that.path, that.args);

			// Use callback if it is defined
			if (typeof that.callback === 'function') {
				that.callback(that.child);
			}
		}
	});

	// Call the first time the callback function
	if (typeof this.callback === 'function') {
		this.callback(this.child);
	}

	return this;
};

// Stop the script reloading
simpler.prototype.stop = function () {

	// Kill the child process only if it exists
	if (this.child) {
		this.child.kill();
		this.child = null;
	}
	
	// Unwatch the file on the provided path
	fs.unwatchFile(this.path);

	return this;
};

// Export a new simpleR instance
module.exports = function (path, args, callback) {
	return new simpler(path, args, callback);
};