const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iam7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const database = client.db("userManageDB");
        const usersCollection = database.collection("users")


        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find()
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.findOne(query);
            res.send(result)
        })

        app.post('/users', async (req, res) => {
            const userBody = req.body;
            const reuslt = await usersCollection.insertOne(userBody);
            res.send(reuslt)
        })

        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const updateBody = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const UpdateDoc = {
                $set: {
                    name: updateBody?.name,
                    email: updateBody?.email,
                    gender: updateBody?.gender,
                    status: updateBody?.status
                }
            };
            const result = await usersCollection.updateOne(filter, UpdateDoc, options);
            res.send(result)
        })

        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.send(result)

        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("User Management System")
})


app.listen(port, () => {
    console.log(`Open This Server By ${port}`)
})