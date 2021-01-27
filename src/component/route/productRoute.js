const express = require('express');
const router = express.Router();
const Product = require('../modal/productModal')
//get all product
router.get('/',async(req,res)=>{
    try{
        const getProduct = await Product.find();
        res.json(getProduct)
    }catch(err){
        console.log({message:err})
    }
})
//podt product
router.post('/',(req, res)=>{
    const postProduct = new Product({
        image:req.body.image,
        title:req.body.title,
        description:req.body.description,
        availableSizes:req.body.availableSizes,
        price:req.body.price,
        count:req.body.count
    })
    postProduct.save()
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.json({message: err});
    });
})
//get by id
router.get('/:getId',async(req,res)=>{
    try {
        const getProductById = await Product.findById(req.params.getId);
        res.json(getProductById)
    }catch(err){
        console.log({message:err})
    }
})
//delete
router.delete('/:deleteId', async(req, res)=>{
    try {
        const deleteProduct = await Product.remove({_id:req.params.deleteId});
        res.json(deleteProduct);
    }catch(err) {
        console.log({message:err})
    }
})
//updateOne
router.patch('./:updateId', async(req, res) =>{
    try{
        const updateProduct = await Product.updateOne({_id:req.params.updateId},{$set:{title:req.body.title}});
        res.json(updateProduct)
    }catch(err){
        console.log({message:err})
    }
})
module.exports = router