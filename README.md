# simpleR 0.0.2

simpleR is a simple script reloader for Node.JS

### [Documentation](https://github.com/micnic/simpleR/wiki/Documentation "simpleR Documentation")

#### More simple modules
[simpleS](http://micnic.github.com/simpleS/)
[simpleT](http://micnic.github.com/simpleT/)

## Instalation

	npm install simpler

## Usage

```javascript
var simpler = require('simpler');

var serverProcess = simpler('server.js', ['test'], function () {
	console.log('Server restarted');
});
```