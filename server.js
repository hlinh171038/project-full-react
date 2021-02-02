const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

// middleware
const product = require('./src/component/route/productRoute');
//modal
const Order = require('./src/component/modal/orderNodal')
 //const order = require('./src/component/route/orderRoute')
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.get('/', (req,res) =>{
  res.send('hello word')
})
app.post('/order', async(req,res)=>{
  if(
      !req.body.name ||
      !req.body.email ||
      !req.body.address ||
      !req.body.total ||
      !req.body.cartItems
  ){
      return res.send({message:"Data is required."});
  }
  const order = await Order(req.body).save();
  res.send(order);
})
//connect to mongoose
mongoose.connect('mongodb://localhost:27017/data-shopping-cart-app', {useNewUrlParser: true, useUnifiedTopology: true});
//use middleware
app.use('/product',product)
// app.use('/order',order)

app.listen(8000)