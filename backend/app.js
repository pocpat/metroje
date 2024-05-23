const { MongoClient } = require('mongodb');
const uri = require ("./atlas_uri")
console.log(uri);
// ===== use .env instade og atlas_uri.js
//require("dotenv").config();
//const uri = proccess.env.MONGODB_URI;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
const dbname = "metroje";
const collectionName = "rents";
const rentsCollection = client.db(dbname).collection(collectionName);

const connectToDB = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database \nFull connection string: ${uri}`);
    } catch (err){
        console.error( `Error connecting to the database : ${err}`);
    }
};

const sampleRent = {
    location: "Auckland",
    suburb: "Remuera",
    rentprice: 300,
    bedrooms: 2,
    bathrooms: 2,
    propertytype: "townhouse",
    carparks: 1,
    rent_id: 12345678
}

const sampleRents2 = [
    {
        location: "Auckland",
        suburb: "CBD",
        rentprice: 800,
        bedrooms: 4,
        bathrooms: 2,
        propertytype: "townhouse",
        rent_id: 23456789
    },
    {
        location: "Auckland",
        suburb: "CBD",
        rentprice: 500,
        bedrooms: 2,
        bathrooms: 1,
        propertytype: "townhouse",
        rent_id: 345678910
    }
]
const rentsToFind ={bedrooms :{ $gt: 2 }} // $gt = greater then 
const oneRentToFind = {_id:"664e860516e57ed8fd04097d"}; //mongodb generats this _id

const main = async() => {
    try{
        await connectToDB();
        //let result = await rentsCollection.insertOne(sampleRent);
        // let result = await rentsCollection.insertMany(sampleRents2);
        //console.log(result)

        // find all with more then 2 bedrooms
      // let result = rentsCollection.find (rentsToFind);
      // let rentCount = rentsCollection.countDocuments(rentsToFind);
      // await result.forEach((rent)=>console.log(rent)); // show all finded rents
      // console.log(`found ${await rentCount} rents`)

// find one doc
let result = rentsCollection.findOne (oneRentToFind);

    }catch (err){
        console.error( `Error connecting to the database : ${err}`);
    }finally {
        await client.close();
    }
};
main();
