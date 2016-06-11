var fs = require('fs');
var keys = require('./keys.js')
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterkeys.access_tokey_secret,
});


var allArg = process.argv;

var action = allArg[2];

var value = allArg[3];


//var myMovie = process.argv[4]
//var myWhat = process.argv[5]

function goLiri() {

	switch(action){
	case 'my-tweets':
	myTweets();
	break;

	case 'spotify-this-song':
	mySpotify();
	break;

	case 'movie-this':
	myMovie();
	break;

	case 'do-what-it-says':
	myWhat();
	break;

}


}


function myTweets() {

	var params = {screen_name: 'nodejs'};
client.get('@lastmaxstanding', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

}

function mySpotify() {

	spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    console.log()
 
    // Do something with 'data' 
});

}

function myMovie(){


}

function myWhat() {
    fs.readFile('./random.txt', "utf8", function(err, data){
        data = data.split(',');
        

        action = data[0];
        
        value = data[1];
        
        doSwitch(action);
    }); 