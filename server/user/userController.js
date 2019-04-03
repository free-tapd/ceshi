var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const fs=require('fs')
/**
 * 
 * 1链接 那台服务器，用户名，密码 库名
 * 2查询
 *  */
let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'user'
});
// console.log(db)
/**
 * 查询 
 * 增
 * INSERT INTO user_table (ID,username,password) VALUES(0,'xiaoming','123456')
 * 查
 * SELECT* FROM user_table
 * 
 */
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());
let secret="dsafdsafdsafdsafd fdsafdsa fdsa"
// 设置token
// var privateKey = fs.readFileSync('private.key');
var token = jwt.sign({ foo: 'bar' }, secret);
// var token = jwt.sign({ foo: 'bar' }, "privateKey", { algorithm: 'RS256'});
console.log(token);
// jwt.verify(token, 'secret', function(err, decoded) {
//   console.log(decoded.foo) // bar
// });
/**
 * 
 * @ 检测token是否过期
 * @ {code：1}
 */
router.post('/checkUser',(req,res)=>{
  let token = req.body.token; // 从Authorization中获取token
  // let secretOrPrivateKey="jwt"; // 这是加密的key（密钥）
  jwt.verify(token, secret, (err, decode)=> {
      if (err) {  //  时间失效的时候 || 伪造的token
          res.json({
            code:0,
            msg:"token失效",
            data:""
          })
      } else {
        res.json({
          code:1,
          msg:"成功"
        })
      }
  })
});
router.get('/test',(req,res)=>{
   res.send('测试成功');
})
router.post('/register', (req, res, next) => {
  console.log(req.body);
  const {
    username,
    password
  } = req.body;
  console.log(username, password)
  if (!req.body) {
    res.sendStatus(400)
  } else {

    db.query('SELECT username FROM user_table', (err, data) => {
      if (err) {
        res.sendStatus(500)
      } else {
        console.log(data)
        let isHas = data.some(v => {
          return v.username == username

        })
        console.log(isHas)
        if (isHas) {
          res.json({
            code: 200,
            data: "该用户已经注册"
          })
        } else {
          // 查询数据库库user_table
          db.query("INSERT INTO user_table (username,password) VALUES(?,?)", [username, password], (err, data) => {

            if (err) {
              res.sendStatus(500);
              console.log(err);
            } else {
              console.log(data);

              res.json({
                code: 200,
                msg: "注册成功",
                
              })
            }

          })


        }

      }
    })

  }

})
/** 
 * @登陆 检查用户名和密码是否正确
 * @code 1正确
 * */ 
router.post('/login', (req, res, next) => {
  const {
    username,
    password
  } = req.body;
  console.log(req.body)
  db.query("SELECT * FROM user_table WHERE username=? AND password=?",[username,password], (err, data) => {
    if (err) {
      throw new Error('请求错误')
    } else {
      if (data) {
        res.json({
          code: 1,
          msg:"登陆成功",
          data,
          token
        })
      } else {
        res.json({
          code: 0,
          mas: "用户名或者密码错误",
          data:""
        })
      }

    }
  });

})

module.exports = router;


