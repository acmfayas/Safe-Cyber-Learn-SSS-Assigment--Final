const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();
const port = 8080;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://fayasacm110:Fayas123119@fayasacm.vztessn.mongodb.net/test', { useNewUrlParser: true });

const UserRoutes = require("./Routes/UserRoutes")
app.use("/user",UserRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
