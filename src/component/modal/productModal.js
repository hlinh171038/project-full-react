const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid')

const ProductShema = mongoose.Schema({
    _id: {type:String, default:shortid.generate},
    title:String,
    description:String,
    image:String,
    price:Number,
    count:Number,
    availableSize:[String]
});

module.exports = mongoose.model('Product', ProductShema)