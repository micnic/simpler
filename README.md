# simpleR 0.0.1

simpleR is a simple file reloader for Node.JS

## Instalation

	npm install simpler

## Usage

```javascript
var simpler = require('simpler');

var serverProcess = simpler('server.js', ['test'], function () {
	console.log('Server restarted');
});
```