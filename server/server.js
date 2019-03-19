const cookieParser=require('cookie-parser');
const express =require('express')
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const static=require('express-static');
const path=require('path');
const multer=require('multer');
const fs=require('fs')
const server=express();
const consolidate=require('consolidate')
let objMulter=multer({dest:'./upload'});
server.use(objMulter.any());
// server.set('view engine','html');
//  server.set('views','')
server.use(cookieParser('asdlfkdsajklfjdsklakj'));
var arr=[];
for(var i=0;i<100000;i++){
arr.push('key_'+Math.random())
}
server.use(cookieSession({name:'zns_session_id',keys:arr,maxAge:20*3600*1000}))
server.use(bodyParser.urlencoded({extended:false}));
//
server.use('/upload',(req,res,next)=>{
    console.log(req.files)
    console.log(path.parse(req.files[0].originalname))
    const newName=req.files[0].path+path.parse(req.files[0].originalname).ext
    console.log(newName)
    // fs.rename(req.files[0].path,newName,function(err){
    //     if(err){
    //         res.send('上传失败')
    //     }else{
    //         res.send('上传成功')
    //     }
    // })
    next()
})

server.use(static('./public'))
server.listen(3000)