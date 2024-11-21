const express = require("express");
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("User Management System")
})

app.listen(port, () => {
    console.log(`Open This Server By ${port}`)
})