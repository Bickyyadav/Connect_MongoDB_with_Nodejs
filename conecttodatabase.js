//conect MONGODB  with nodejs 
//Show database form mongodb

const { MongoClient, Collection } = require('mongodb');
const uri = 'mongodb://localhost:27817';
const client = new MongoClient(uri);

async function   getData()
{
    let result = await client.connect();
    //choosing particluar data ecommerce is the database name
    let db = result.db('ecommerce-DB')
    //choosing particlar db like inside a particular db we have to choose particular
    let Collection = db.collection('product');
    let response=  await Collection.find({}).toArray();
    console.log(response);
}

//CALL ING FUNCITON 
getData()