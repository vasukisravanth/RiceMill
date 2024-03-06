const express=require('express');

const router=express.Router();

const customerhomecontroller=require('../controllers/customerhomecontroller');





router.get('/customerhome/:phonenumber',customerhomecontroller);
module.exports = router;