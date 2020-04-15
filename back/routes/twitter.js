var express = require('express');
var router = express.Router();

const twitter_controller = require('../controllers/twitter_controllers')


router.get('/', twitter_controller.query);
router.get('/mytweet', twitter_controller.mytweet);


 /*
var client = new Twitter({
  consumer_key: 'E9LzP9VLVLfPWkCcjBAhkSx1L',
  consumer_secret: 'slVyg2se5DAd4YBvqAWKPEUCk5YLEZSo2vkMtQj1S2bEmlWcVL',
  access_token_key: '434920191-iyhDaXcMa9UNe7Fb1McCdZQZUbnFjFtuwExTQd0G',
  access_token_secret: 'KrEnLqr6rmuiGDo1s0HZHzvs9XeR11WQDrQHboKEdi9qJ'
});

 router.get('/', async (req,res,next)=>{
    const data = await client.get('search/tweets', {q: 'ダナン'});
    var data2 = data.statuses.map(({text})=>({text}));
    // res.render('tweet.ejs',{tweets: data2});
    res.json(data2)
 });

 router.get('/mytweet', async (req,res,next)=>{
    const data = await client.get('statuses/user_timeline',{user_id: '434920191', count: 50 })
    var data2 = data.map(({text})=>({text}))
    res.json(data2)
 })
*/

module.exports = router;