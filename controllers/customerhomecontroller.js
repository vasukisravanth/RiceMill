const item = require('../models/itemmodel');

let itemlist=[];

const getitems=(req,res)=>{
    var phonenumber=req.params.phonenumber;
    item.find()
    .then(itemlist=>{
        if(itemlist.length>=0)
        {
            res.render("customerhome",{newListItems:itemlist,phonenumber:phonenumber});
        }
        else{
            console.log("Successfully shown")
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

module.exports=getitems