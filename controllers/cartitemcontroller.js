const item = require('../models/itemmodel');
const cartitem=require('../models/cartitem');


const addtocart=(req,res)=>{
    var itemid=req.params.itemid;
    console.log(itemid);
    var quantity=req.params.quantity;
    var phonenumber=req.params.phonenumber

    item.findOne({itemid:itemid})
    .then(document=>{
        console.log(document.itemname);
        const newcartitem=new cartitem({
            phonenumber:phonenumber,
            itemid:document.itemid,
            itemname:document.itemname,
            quantity:quantity,
            price:document.price
        });

        newcartitem.save()
        .then(() => {
            console.log('Item added in the cart');
        })
        .catch((err) => {
            console.error(err);
        });
    })


}

const gotocart=(req,res)=>{
    var phonenumbe=req.params.phonenumber;

   res.redirect(`/usercartitems/${phonenumbe}`)

    

}

const getcartitems=(req,res)=>{
    var phonenumber=req.params.phonenumbe;
    cartitem.find({phonenumber:phonenumber})
    .then(itemlist=>{
        if(itemlist.length>=0)
        {
            res.render("UserCarthome",{newListItems:itemlist,phonenumber:phonenumber});
        }
        else{
            console.log("Successfully shown")
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    
}


const removefromcart=(req,res)=>{
    var phonenumber=req.params.phonenumber;
    var itemid=req.params.itemid;
    cartitem.deleteOne({phonenumber:phonenumber,itemid:itemid})
    .then(result => {
        if (result.deletedCount > 0) {
          console.log('Document deleted successfully');
          cartitem.find({phonenumber:phonenumber})
            .then(itemlist=>{
            if(itemlist.length>=0)
            {
              res.render("UserCarthome",{newListItems:itemlist,phonenumber:phonenumber});
            }
            else{
              console.log("Successfully shown")
            }
          })
          .catch(error => {

             console.error('Error:', error);
           });
          
        } else {
          console.log('Document not found or not deleted');
        }
      })
    .catch(err => {
        console.error('Error deleting document:', err);
    });
}


module.exports={
    addtocart,
    gotocart,
    getcartitems,
    removefromcart
};