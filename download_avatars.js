var fs = require('fs');
var request = require('request');

var secrets = require('./secrets');


function getRepoContributors(repoOwner, repoName, callback) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets
    }
  }

  request(options, function(err, res, body) {
    if (err) {
      throw err;
    }

    var parsed = JSON.parse(body);

    var contributors = [];

    for(var i = 0; i < parsed.length; i++) {
      var avatarLink = parsed[i].avatar_url;
      contributors.push({url: avatarLink, fileName: parsed[i].login});
    }

    callback(err, contributors);

  });
}

getRepoContributors(process.argv[2], process.argv[3], downloadImageByURL);

function downloadImageByURL(err, result) {
  for (let user of result) {
    request(user.url)
      .on('error', function (err) {
        throw err;
      })
      .pipe(fs.createWriteStream('./avatars/' + user.fileName + '.jpg'));
  }
};

