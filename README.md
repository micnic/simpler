# simpleR 0.0.3

simpleR is a simple script reloader for Node.JS

### [Documentation](https://github.com/micnic/simpleR/wiki/Documentation)

#### Works in Node.JS 0.10+
#### Any feedback is welcome!

#### More simple modules
[simpleS](http://micnic.github.com/simpleS/)
[simpleT](http://micnic.github.com/simpleT/)

## Instalation

	npm install simpler

## Usage

```javascript
var simpler = require('simpler');

simpler('server.js', ['test'], function (process) {
    // Do something with the process
    console.log('Server restarted');
});
```