let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
var serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + '/dist'));

var port = process.env.PORT || 3000;
app.listen(port);

console.log('server started ' + port);

