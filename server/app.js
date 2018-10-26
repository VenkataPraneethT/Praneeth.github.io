const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const database = require('./config/configurationSettings');
mongoose.connect(database.remoteUrl,  { useNewUrlParser: true } );

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

// require("./apis/cart.js")(app);

app.use( '/api',  require('./apis/cart'));

app.listen(3000, () => console.log('blog server running on port 3000!'))


module.exports = app
