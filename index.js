var express = require('express');
var urlapi = require('url');
var app = express();

app.get('/', function (req, res) {
  var result = 'Invalid username';

  if (undefined != req.query.username) {
      url = urlapi.parse(req.query.username);
      url = url.pathname.split('/');
      result = url.slice(-1).pop();

    if (result.substr(0,1) != '@')
      result = '@' + result;
  }
  res.send(result);
});

app.listen(3000);
