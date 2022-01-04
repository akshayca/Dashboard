const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const buildoverview_router = require('./routes/buildoverview');
const project_1_router = require('./routes/project_1');

app.use('/buildoverview', buildoverview_router);
app.use('/project_1', project_1_router);
            
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});