const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
    book_name:{
        type:String,
        required:true,
    },
    book_auther:{
        type:String,
        required:true,
    },
    book_price:{
        type:Number,
        required:true,
    },
     book_publish_date:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        enum:["enable","disable"],
        default:"enable"
    }


})

module.exports = mongoose.model("bs_books",bookSchema);