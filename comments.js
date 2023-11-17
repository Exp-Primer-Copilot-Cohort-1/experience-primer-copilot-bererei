// Create web server

// Import express module
const express = require("express");

// Import body-parser module
const bodyParser = require("body-parser");

// Import mongoose module
const mongoose = require("mongoose");

// Import path module
const path = require("path");

// Import config module
const config = require("./config");

// Set up express app
const app = express();

// Connect to MongoDB
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Set up body-parser middleware
app.use(bodyParser.json());

// Set up static directory
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const comments = require("./routes/comments");

// Set up routes
app.use("/comments", comments);

// Set up port
const port = 3000;

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
