const express=require('express');

const router=express.Router();

const cartitemcontroller=require('../controllers/cartitemcontroller');





router.post('/click/:itemid/:quantity/:phonenumber',cartitemcontroller.addtocart);
router.post('/usercart/:phonenumber',cartitemcontroller.gotocart)
router.get('/usercartitems/:phonenumbe',cartitemcontroller.getcartitems)
router.post('/clicktoRemove/:itemid/:phonenumber',cartitemcontroller.removefromcart)
module.exports = router;