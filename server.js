const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

// middleware
const product = require('./src/component/route/productRoute')
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.get('/', (req,res) =>{
  res.send('hello word')
})
// connect to mongoose
mongoose.connect('mongodb://localhost:27017/data-shopping-cart-app', {useNewUrlParser: true, useUnifiedTopology: true});
//use middleware
app.use('/product',product)

app.listen(8000)