var nlp = require('./index'),
  fs = require('fs');

var config = JSON.parse(fs.readFileSync('config.json'));

nlp('./access.log', config, function(logs) {
  console.log('logs good:' + logs.length);
})
