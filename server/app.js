var express = require('express');
var app = express();


app.all('*', function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "http://192.168.1.5:8080");

  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  res.header("X-Powered-By", ' 3.2.1');

  res.header("Content-Type", "application/json;charset=utf-8");

  next();

}); 
// 模拟登录注册接口
var UserController = require('./user/UserController');
app.use('/user', UserController);

module.exports = app;
