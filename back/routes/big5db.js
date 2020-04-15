var express = require('express');
var router = express.Router();
var ss = require('simple-statistics');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const big5dbController = require('../controllers/big5db_controllers')

router.get('/', big5dbController.getBig5s);
router.get('/all', big5dbController.getBig5all);
router.get('/openness',big5dbController.getBig5_openness);
router.get('/conscientiousness',big5dbController.getBig5_conscientiousness);
router.get('/extraversion',big5dbController.getBig5_extraversion);
router.get('/agreeableness',big5dbController.getBig5_agreeableness);
router.get('/neuroticism',big5dbController.getBig5_neuroticism);

router.get('/correlation', async (req,res,next)=>{

    let big5s;

    try{
        await client.connect({useUnifiedTopology:true});

        var db = client.db("test_db");
        var collection = db.collection("Big5");
    
        big5s =  await collection.find({}).toArray();

        big5_percentile0 = big5s[0].personality[0].children.map(({percentile})=>({percentile}))
        big5_percentile1 = big5s[0].personality[1].children.map(({percentile})=>({percentile}))
        big5_percentile2 = big5s[0].personality[2].children.map(({percentile})=>({percentile}))
        big5_percentile3 = big5s[0].personality[3].children.map(({percentile})=>({percentile}))
        big5_percentile4 = big5s[0].personality[4].children.map(({percentile})=>({percentile}))
        var arrayM = big5_percentile0.concat(big5_percentile1).concat(big5_percentile2).concat(big5_percentile3).concat(big5_percentile4)
        var arraym = arrayM.map(num => num.percentile)

        big5_percentile0 = big5s[1].personality[0].children.map(({percentile})=>({percentile}))
        big5_percentile1 = big5s[1].personality[1].children.map(({percentile})=>({percentile}))
        big5_percentile2 = big5s[1].personality[2].children.map(({percentile})=>({percentile}))
        big5_percentile3 = big5s[1].personality[3].children.map(({percentile})=>({percentile}))
        big5_percentile4 = big5s[1].personality[4].children.map(({percentile})=>({percentile}))
        var arrayR = big5_percentile0.concat(big5_percentile1).concat(big5_percentile2).concat(big5_percentile3).concat(big5_percentile4)
        var arrayr = arrayR.map(num => num.percentile)

        var correlation = ss.sampleCorrelation(arraym,arrayr).toFixed(5);

    }catch(error){
        return res.json({message: 'could not find api'});
    };
    client.close();

    res.json(correlation)
}
)

router.get('/test', async (req,res,next)=> {
    let big5s;
    let test;

    try{
        await client.connect({useUnifiedTopology:true});

        var db = client.db("test_db");
        var collection = db.collection("Big5");
    
        big5s =  await collection.find({}).toArray();

        big5_percentile0 = big5s[0].personality[0].children.map(({name,percentile})=>({name,percentile}))
        big5_percentile1 = big5s[0].personality[1].children.map(({name,percentile})=>({name,percentile}))
        big5_percentile2 = big5s[0].personality[2].children.map(({name,percentile})=>({name,percentile}))
        big5_percentile3 = big5s[0].personality[3].children.map(({name,percentile})=>({name,percentile}))
        big5_percentile4 = big5s[0].personality[4].children.map(({name,percentile})=>({name,percentile}))
        var arrayM = big5_percentile0.concat(big5_percentile1).concat(big5_percentile2).concat(big5_percentile3).concat(big5_percentile4)
        var sortM = arrayM.sort((a,b)=>{return b.percentile - a.percentile })

    }catch(error){
        return res.json({message: 'could not find api'});
    };
    client.close();

    res.json(sortM)

})

router.get('/d3', async (req,res,next)=>{

    let big5s;

    try{
        await client.connect({useUnifiedTopology:true});

        var db = client.db("test_db");
        var collection = db.collection("Big5");
    
        big5s =  await collection.find({}).toArray();

        big5_percentile0 = big5s[0].personality[0].children.map(({percentile})=>({percentile}))
        big5_percentile1 = big5s[0].personality[1].children.map(({percentile})=>({percentile}))
        big5_percentile2 = big5s[0].personality[2].children.map(({percentile})=>({percentile}))
        big5_percentile3 = big5s[0].personality[3].children.map(({percentile})=>({percentile}))
        big5_percentile4 = big5s[0].personality[4].children.map(({percentile})=>({percentile}))
        var arrayM = big5_percentile0.concat(big5_percentile1).concat(big5_percentile2).concat(big5_percentile3).concat(big5_percentile4)
        var arraym = arrayM.map(num => num.percentile)

        big5_percentile0 = big5s[1].personality[0].children.map(({percentile})=>({percentile}))
        big5_percentile1 = big5s[1].personality[1].children.map(({percentile})=>({percentile}))
        big5_percentile2 = big5s[1].personality[2].children.map(({percentile})=>({percentile}))
        big5_percentile3 = big5s[1].personality[3].children.map(({percentile})=>({percentile}))
        big5_percentile4 = big5s[1].personality[4].children.map(({percentile})=>({percentile}))
        var arrayR = big5_percentile0.concat(big5_percentile1).concat(big5_percentile2).concat(big5_percentile3).concat(big5_percentile4)
        var arrayr = arrayR.map(num => num.percentile)

        var d3b = []

        for(let i=0; i<30; i++){
            d3b.push([arraym[i],arrayr[i]])
        }

    }catch(error){
        return res.json({message: 'could not find api'});
    };
    client.close();

    res.json(d3b)
}
)


/*
router.get('/big5_conscientiousness',(req,res,next)=>{
        cursor.forEach(
            function(doc) {
                var data = doc.personality[1].children.map(({name,percentile}) => ({name,percentile}))
                return res.json(data);
            }
        );
    });

router.get('/big5_extraversion',(req,res,next)=>{
        cursor.forEach(
            function(doc) {
                var data = doc.personality[2].children.map(({name,percentile}) => ({name,percentile}))
                return res.json(data);
            }
        );
    });

router.get('/big5_agreeableness',(req,res,next)=>{
        cursor.forEach(
            function(doc) {
                var data = doc.personality[3].children.map(({name,percentile}) => ({name,percentile}))
                return res.json(data);
            }
        );
    });

router.get('/big5_neuroticism',(req,res,next)=>{
        cursor.forEach(
            function(doc) {
                var data = doc.personality[4].children.map(({name,percentile}) => ({name,percentile}))
                return res.json(data);
            }
        );
    });
*/

module.exports = router;
