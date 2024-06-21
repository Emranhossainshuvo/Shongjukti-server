const express = require("express");
const cors = require("cors")
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MongoDB_database_userName}:${process.env.MongoDB_database_password}@cluster0.0fn8ke9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send("hello from shongjukti");
});

app.listen(port, () => {
    console.log(`The application is runnig from port : ${port}`)
})