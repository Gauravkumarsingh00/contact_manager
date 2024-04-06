const asynchandler = require("express-async-handler");
const contact= require("../models/contactmodel"); 
const { Error } = require("mongoose");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asynchandler( async(req,res)=>{
    const contacts =await contact.find({user_id : req.user.id});
    res.status(200).json({contacts})

});

//@desc create new contacts
//@route POST /api/contacts
//@access private
const createcontact = asynchandler( async (req,res)=>{
    console.log("the request body is:",req.body);
    const{name, email, phone}= req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all field are mandetory");
    }
    
    const data = await contact({
        
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        user_id: req.user.id,
    });
    const result = await data.save();
    console.log(result);
    res.status(201).json({result});
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact =asynchandler( async(req,res)=>{
    const ocontact = await contact.findById(req.params.id);
    
    if (!ocontact){
        res.status(404);
        throw new Error("contact not found");
        
    }
    res.status(200).json(ocontact);
});

//@desc update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact =asynchandler( async(req,res)=>{
    const ocontact = await contact.findById(req.params.id);
    
    if (!ocontact){
        res.status(404);
        throw new Error("contact not found");
        
    }
    
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user can't have permission to update other contacts")
    }
    const updatedContact = await contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true} 
    );


    res.status(200).json(updatedContact);
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact =asynchandler( async(req,res)=>{
    const ocontact = await contact.findById(req.params.id);
     if (!ocontact){
        res.status(404);
        throw new Error("contact not found");
        
    }
     
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user don't have permission to delete other contacts")
    }

    const deletedcontact = await contact.findByIdAndDelete(
        req.params.id,
        req.body,
        {new:true}

    )
    res.status(200).json(deletedcontact);
});



module.exports={getContacts,createcontact ,getContact ,updateContact,deleteContact};