const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/", async function(req, res){

    try {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        return res.json(data);
    } catch (error) {
        console.error(error);
    }
});

app.listen("3000");