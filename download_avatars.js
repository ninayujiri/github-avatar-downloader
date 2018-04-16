//Using the request package, you will fetch the list of contributors as a JSON string
//from the GitHub API's contributors endpoint -> https://api.github.com/repos/jquery/jquery/contributors
//Upon receiving the results, your function will invoke a callback function with the results.
//This callback function will loop over and print out the avatar_url for each object in the collection.


var request = require('request');

// console.log('Welcome to the GitHub Avatar Downloader!');

// fetches the list of contributors as a JSON string
function getRepoContributors(repoOwner, repoName, callback) {


  //receives results

  //invokes a callback function with the results

  //callback function loops over and prints out the avatar_url for each object




}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
