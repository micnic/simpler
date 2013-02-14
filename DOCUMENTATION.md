```javascript
var simpler = require('simpler');
```

## File Reloader Creation
`simpler(path[, args, callback])`

path: string

args: array of strings

callback: function(0)

Runs the script located on the provided path and reload it on file chages, the possible errors that may appear are shown in the console, but the execution of the script is not stopped, the file reloader will wait until the script will be changed and with run it again. An array of strings can be set to the script if needed. On file changes the callback function is ran. simpleR returns the object of the process of the ran script. Example:
```javascript
var serverProcess = simpler('server.js', ['test'], function () {
    // Application logic
});
```