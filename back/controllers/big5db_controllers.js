const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://localhost:27017';
const client = new MongoClient(process.env.MONGODB_URI || url, { useNewUrlParser: true });

const getBig5s = async (req, res, next) => {

    let big5s;
    let big5ss;

    try {
        await client.connect({ useUnifiedTopology: true });

        var db = client.db(process.env.DB_NAME || dbName);
        var collection = db.collection("Big5");
    
        var query = {};
        var projection = {
            "personality.name": "$personality.name",
            "personality.percentile": "$personality.percentile",
            "personality.trait_id": "$personality.trait_id",
            "_id": 0
        };
    
        big5s =  await collection.find(query).project(projection).toArray();
        big5ss = big5s[0].personality.map(({trait_id,name,percentile})=>({trait_id,name,percentile}))

    } catch (error) {
        return res.json({message: 'Could not retrieve products.'});
    };
    client.close();

    res.json(big5ss);
}

const getBig5all = async (req, res, next) => {

    const uri = "mongodb+srv://234274:234274@big5-owii7.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });


    let big5s;

    try {
        await client.connect({ useUnifiedTopology: true });

        var db = client.db("test_db");
        var collection = db.collection("Big5");
    
        big5s =  await collection.find({}).toArray();
        big5rio =  await big5s[1].personality

    } catch (error) {
        return await res.json({message: 'Could not retrieve products.'});
    };
    process.on('unhandledRejection', console.dir);

    await client.close();

    await res.json(big5rio)
}


const getBig5_openness = async (req,res,next) =>{

    let big5s;
    let big5_openness;

    try{
        await client.connect({useUnifiedTopology:true});

        var db = client.db("test_db");
        var collection = db.collection("Big5");
    
        big5s =  await collection.find({}).toArray();
        big5_openness = big5s[0].personality[0].children.map(({name,percentile})=>({name,percentile}))

    }catch(error){
        return res.json({message: 'could not find api'});
    };
    client.close();

    res.json(big5_openness)
}

const getBig5_conscientiousness = async (req,res,next) =>{

    let big5s;
    let big5_conscientiousness;

    try{
        await client.connect({useUnifiedTopology:true});

        var db = client.db("test_db");
        var collection = db.collection("Big5");
    
        big5s =  await collection.find({}).toArray();
        big5_conscientiousness = big5s[0].personality[1].children.map(({name,percentile})=>({name,percentile}))

    }catch(error){
        return res.json({message: 'could not find api'});
    };
    client.close();

    res.json(big5_conscientiousness)
}

const getBig5_extraversion = async (req,res,next) =>{

    let big5s;
    let big5_extraversion;

    try{
        await client.connect({useUnifiedTopology:true});

        var db = client.db("test_db");
        var collection = db.collection("Big5");
    
        big5s =  await collection.find({}).toArray();
        big5_extraversion = big5s[0].personality[2].children.map(({name,percentile})=>({name,percentile}))

    }catch(error){
        return res.json({message: 'could not find api'});
    };
    client.close();

    res.json(big5_extraversion)
}

const getBig5_agreeableness = async (req,res,next) =>{

    let big5s;
    let big5_agreeableness;

    try{
        await client.connect({useUnifiedTopology:true});

        var db = client.db("test_db");
        var collection = db.collection("Big5");
    
        big5s =  await collection.find({}).toArray();
        big5_agreeableness = big5s[0].personality[2].children.map(({name,percentile})=>({name,percentile}))

    }catch(error){
        return res.json({message: 'could not find api'});
    };
    client.close();

    res.json(big5_agreeableness)
}

const getBig5_neuroticism = async (req,res,next) =>{

    let big5s;
    let big5_neuroticism;

    try{
        await client.connect({useUnifiedTopology:true});

        var db = client.db("test_db");
        var collection = db.collection("Big5");
    
        big5s =  await collection.find({}).toArray();
        big5_neuroticism = big5s[0].personality[4].children.map(({name,percentile})=>({name,percentile}))

    }catch(error){
        return res.json({message: 'could not find api'});
    };
    client.close();

    res.json(big5_neuroticism)
}


exports.getBig5s = getBig5s;
exports.getBig5all = getBig5all;
exports.getBig5_openness = getBig5_openness;
exports.getBig5_conscientiousness = getBig5_conscientiousness;
exports.getBig5_extraversion = getBig5_extraversion;
exports.getBig5_agreeableness = getBig5_agreeableness;
exports.getBig5_neuroticism = getBig5_neuroticism;
