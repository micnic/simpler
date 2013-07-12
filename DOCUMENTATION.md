```javascript
var simpler = require('simpler');
```

## New Script Reloader Instance
`simpler(path[, args, callback])`

path: string

args: array of strings

callback: function(process)

Runs the script located on the provided path and reload it on file chages, the possible errors that may appear are shown in the console, but the execution of the script is not stopped, the file reloader will wait until the script will be changed and with run it again. An array of strings can be set to the script if needed. On file changes the callback function is ran. simpleR returns the object of the process of the ran script, this object is also received as parameter to the callback function each time the script is reloaded. In case that the script file is renamed or removed the callback function will have as parameter a null value. Example:
```javascript
simpler('server.js', ['test'], function (process) {
    // Application logic
});
```

### Script Reloader Management
`.start([args, callback])`

args: array of strings

callback: function(process)

Starts or restarts the script reloader for the provided path, changin only it's arguments and callback function. This method is called automatically on new script reloader instance, it is not necessary to call it explicitly.

`.stop()`

Stops the script for being watched and reloaded, can be resumed with `.start()` method after this.