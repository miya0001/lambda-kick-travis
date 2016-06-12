var request = require('superagent');
var config = require('./config/travis-config.js');

exports.kickTravis = function(event, context) {
  request
    .post('https://api.travis-ci.org/repo/' + config.user + '%2F' + config.repo +'/requests')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Travis-API-Version', '3')
    .set('Authorization', 'token "' + config.token + '"')
    .send({
      "request": {
        "message": "Build through API from Lambda",
        "branch": "master"
      }
    })
    .end(function(err, res){
      if (err) {
        context.fail(err);
      } else {
        context.succeed('OK');
      }
    });
}
