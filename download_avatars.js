var request = require('request');
var secrets = require('./secrets')


function getRepoContributors(repoOwner, repoName, callback) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets
    }
  };

  request(options, function(err, res, body) {
    var parsed = JSON.parse(body);
    for(var i = 0; i < parsed.length; i++) {
      var avatar = parsed[i].avatar_url;
      console.log(avatar);
    }
    callback(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {

});



