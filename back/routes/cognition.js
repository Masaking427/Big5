var express = require('express');
var router = express.Router();

var Twitter = require('twitter');
let https = require ('https');


router.get('/', async (req,res,next)=>{

    var client = new Twitter({
        consumer_key: 'E9LzP9VLVLfPWkCcjBAhkSx1L',
        consumer_secret: 'slVyg2se5DAd4YBvqAWKPEUCk5YLEZSo2vkMtQj1S2bEmlWcVL',
        access_token_key: '434920191-iyhDaXcMa9UNe7Fb1McCdZQZUbnFjFtuwExTQd0G',
        access_token_secret: 'KrEnLqr6rmuiGDo1s0HZHzvs9XeR11WQDrQHboKEdi9qJ'
        });
    
    const data = await client.get('statuses/user_timeline',{user_id: '434920191', count: 50 })
    

    subscription_key = "8f9a7acc51e345c6ad94bc296688139e";
    endpoint = "https://tweet-negaposi.cognitiveservices.azure.com/";

    let path = '/text/analytics/v2.1/sentiment';

let response_handler = function (response) {
    let body = '';
    response.on('data', function (d) {
        body += d;
    });
    response.on('end', function () {
        let body_ = JSON.parse(body);
        let body__ = JSON.stringify(body_, null, '  ');
        console.log(body__);
        res.json(body_);
    });
    response.on('error', function (e) {
        console.log('Error: ' + e.message);
    });
};

let get_sentiments = function (documents) {
    let body = JSON.stringify(documents);

    let request_params = {
        method: 'POST',
        hostname: (new URL(endpoint)).hostname,
        path: path,
        headers: {
            'Ocp-Apim-Subscription-Key': subscription_key,
        }
    };

let req = https.request(request_params, response_handler);
    req.write(body);
    req.end();
}



let documents = {
    'documents': [
        { 'id': '1', 'language': 'ja', 'text': 'いつもお世話になっております。穀田の母でございます。まじテンション上げ上げ。' },
        { 'id': '2', 'language': 'ja', 'text': "見渡すとそこは一面の血の海だった。周りには、誰とも知れない嗚咽の声がどこからともなく湧いて出ていた。" },
        { 'id': '3', 'language': 'ja', 'text': data[9].text}
    ]
};

get_sentiments(documents);

})


module.exports = router;