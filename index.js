var request = require('superagent');
var config = require('config');

exports.kickTravis = function(event, context) {
  request
    .post('https://api.travis-ci.org/repo/' + config.get('user') + '%2F' + config.get('repo')+'/requests')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Travis-API-Version', '3')
    .set('Authorization', 'token "' + config.get('token') + '"')
    .send({
      "request": {
        "message": "Build through API from Lambda",
        "branch": "master"
      }
    })
    .end(function(err, res){
      if (err) {
        console.log(err);
      } else {
        console.log('OK');
      }
    });
}
