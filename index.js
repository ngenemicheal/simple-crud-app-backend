const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();
require("dotenv").config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/product", productRoute);

app.get("/", function (req, res) {
    res.send("Hello from NodeJS with nodemon");
});

// connect to MongoDB and start server
const port = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(() => {
        console.log("Error connecting to MongoDB");
    });
