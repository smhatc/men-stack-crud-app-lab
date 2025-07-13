const express = require("express");
const app = express();
const port = 3000;

// ROUTES
app.get("/", (req, res) => {
        res.render("index.ejs");
});

// STARTING THE SERVER
app.listen(port, () => {
        console.log(`Server is listening on port ${port}.`);
});