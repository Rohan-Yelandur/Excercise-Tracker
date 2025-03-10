require('dotenv').config()
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the Workout Tracker"});
});

app.listen(process.env.PORT, () => {
    console.log("listening on port 4000!");
})
