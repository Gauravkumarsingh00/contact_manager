const mongoose  = require("mongoose");
const express = require("express");

const contactSchema =new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    name:{
        type: String,
        required : [true , "Please add the name"]
    },
    email:{
        type: String,
        required : [true , "Please add the email"]
    },
    phone:{
        type: Number,
        required : [true , "Please add the contact number"]
    },
 },
 {
    timestamps: true,
 }

);

const contact = new mongoose.model("contact" ,contactSchema);

module.exports = contact;
