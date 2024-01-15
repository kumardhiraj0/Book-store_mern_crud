const mangoose = require("mongoose");

mangoose.connect("mongodb://0.0.0.0:27017/bookstore");

mangoose.connection.on("Connected",()=>{
    console.log("Connected to mongodb");
})


mangoose.connection.on("Error",(err)=>{
    console.error("Connection error",err);
})

module.exports = mangoose;