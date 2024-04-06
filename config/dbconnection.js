const mongoose = require("mongoose");

// const connectdb = async ()=>{
//        try {
//         const connect = await mongoose.connect("mongodb://localhost:27017/contact");
//         console.log("database connected:", connect.Connection.host , connect.Connection.name)
//        } catch (err) {
//            console.log(err);
//            process.exit(1);
//        }
// }
mongoose.connect("mongodb://localhost:27017/contact")
.then(()=>{
    console.log("connection succesful")
})
.catch((err)=>{
    console.log("no connection");
})

// module.exports = connectdb;