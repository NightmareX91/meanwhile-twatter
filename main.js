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

function randBase64() {
    var plain = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i = 0; i < 20; i++) {
        plain += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    var out = new Buffer(plain).toString("base64");
    
    console.log(out);

    return out;
}

var client = new twitter({
    consumer_key: authDetails.consumer_key,
    consumer_secret: authDetails.consumer_secret,
    access_token_key: authDetails.access_token_key,
    access_token_secret: authDetails.access_token_secret
});

setInterval(function () {
    client.post("statuses/update", {status: randBase64()}, function(err, tweet, response) {
        if (err) {
            throw err;
        }
    });
}, 3600000);
