try {
    var twitter = require("twitter");
}
catch (e) {
    console.log("Please run npm install and make sure it passes with no errors!");
    process.exit();
}

try {
    var authDetails = require("./auth.json");
}
catch (e) {
    console.log("You need to create an auth.json file using the example file on the github!");
    process.exit();
}

var client = new twitter({
    consumer_key: authDetails.consumer_key,
    consumer_secret: authDetails.consumer_secret,
    access_token_key: authDetails.access_token_key,
    access_token_secret: authDetails.access_token_secret
});
