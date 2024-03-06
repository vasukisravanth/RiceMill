
const fast2sms=require('fast-two-sms');
const nodemailer=require('nodemailer');

const user=require('../models/usermodel')


function generateRandomNumberlogin() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}
let currentuser=[];
let cuser=[];


let otp=generateRandomNumberlogin();


const login_otp=(req,res)=>{
    var number=req.body.number;
    var mail=req.body.mail

    var options={
            authorization:"a48Wfi4PvItXdEUWOKCorBwrriVlupj7w5OhAxAMXpO3JZUsFKXsDFQ4qjQ3",
            message:otp,
            numbers:[number]
        }
        fast2sms.sendMessage(options)
         .then((response)=>{
            console.log(response);
           
          
          })
         .catch((error)=>{
         console.log(error);
         });
         console.log('vas');
     const newuser=new user({
            phonenumber:number,
            email:mail
        });
        user.findOne({ phonenumber:number})
        .then(document => {
            if (document) {
                console.log('Document exists:', document);
                var link=`/token/${number}`
                res.redirect(link);
            } else {
                console.log('Document does not exist');
                newuser.save();
                console.log('User added ')
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
module.exports=login_otp;
module.exports.otp=otp;


