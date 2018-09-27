var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = 8000;

server.use(express.static(__dirname + '/app'));
server.use(bodyParser.json());
server.use(bodyParser.json({ type: 'application/vdn.api+json' }));

server.listen(port);
console.log("App listening on port " + port);

// // /api/users

// server.get('/api/users', function(req, res) {

//   var users = [
//     {"name": "Marcos", "age": 41},
//     {"name": "Ana", "age": 36},
//     {"name": "Julien", "age": 15}
//   ];

//   res.json(users);
// });

// //application
// server.get('*', function(req, res) {
//   res.sendfile('./app/index.html');
// });
