const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const connectdb = require("./config/dbconnection");
const  dotenv = require("dotenv").config();
const contact = require("./models/contactmodel");
const app = express();

const port = process.env.PORT||5000 ;

app.use(express.json());
app.use("/api/contacts",require("./routes/contactsRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorhandler);

app.listen(port,()=>{
    console.log(`connection is sucessful on port ${port}`)
})
