const express = require("express");
const app = express();
const cors = require("cors")
require('dotenv').config()
const profilRoute = require('./router/profilRoute')

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//Routes
app.use('/',profilRoute)
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
