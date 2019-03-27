const express=require('express');
const router =express.Router();
const mysql=require('mysql');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
// router.



router.get('/',(req,res)=>{
res.send('BOLG');
})
module.exports=router;