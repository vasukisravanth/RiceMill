const mongoose=require("mongoose");

const cartitemSchema=new mongoose.Schema({
    phonenumber:String,
    itemid:String,
    itemname:String,
    quantity:String,
    price:Number
});

const cartitem=new mongoose.model("cartitem",cartitemSchema);

module.exports=cartitem;