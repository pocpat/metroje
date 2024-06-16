import { MongoClient, ServerApiVersion } from 'mongodb';
import env from 'dotenv';

const uri = env.config().parsed?.MONGODB_URI;
console.log("uri: ", uri);
  //'mongodb+srv://elenamongodb:<password>@cluster0.og4lx1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to the server');
  
    // Send a ping to confirm a successful connection
    await client.db('metroje').command({ ping: 1 });
    console.log('Pinged the deployment');
  
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  
    // Fetch all documents from a specific collection
    const collection = client.db("metroje").collection("rents");
    const docs = await collection.find({}).toArray();
    console.log(docs);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Replace <password> with the password for the elenamongodb user. Ensure any option params are
// URL encoded
