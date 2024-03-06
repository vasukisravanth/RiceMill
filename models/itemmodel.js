const mongoose=require("mongoose");

const itemSchema=new mongoose.Schema({
    itemid:String,
    itemname:String,
    quantity:String,
    price:Number
});

const item=new mongoose.model("item",itemSchema);

module.exports=item;