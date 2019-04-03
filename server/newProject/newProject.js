const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
  extended: true
}))
router.use(bodyParser.json());
let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'project'
})
// xyy547491937.b1.luyouxia.net:40084
router.post('/addProject', (req, res, next) => {
  console.log(req.body);
  const {
    protitle,
    member,
    proimportant,
    propriority,
    prodecription
  } = req.body
  db.query("INSERT INTO  project_table (protitle,member,proimportant,propriority,prodecription) VALUES(?,?,?,?,?)", [protitle, member, proimportant, propriority, prodecription], (err, data) => {
    if (err) {
      console.log(err)
      res.json({
        code: 0,
        data: "",
        msg: "服务器错误"
      })
    } else {
      console.log(data);
      res.json({
        code: 1,
        data: "",
        msg: data.insertId
      })

    }
  })
});
router.post("/searchProject", (req, res) => {
  console.log(req.body.protitle);
  var searchInfo = "%" + req.body.protitle + "%";
  // db.query('SELECT * FROM project_table WHERE protitle LIKE "?%"',[req.body.protitle],(err,data)=>{
  db.query('SELECT * FROM project_table WHERE `protitle` LIKE' + req.body.protitle + '"%"', (err, data) => {

    // })
    if (err) {
      console.log(err)
      res.json({
        code: 0,
        msg: "服务器错误"
      })
    } else {
      console.log(data)
      res.json({
        code: 1,
        data,
      })
    }
  })
})
/**
 * @ 请求项目 [int]pid
 * @ 返回 [array] list
 */
router.post("/projectList", (req, res) => {
  db.query("SELECT * FROM `project_table` WHERE `pid`=" + req.body.pid, (err, data) => {
    if (err) {
      res.json({
        code: 0,
        msg: "没有此项目id"
      })
    } else {
      res.json({
        code: 1,
        data,
        msg: "请求成功"
      })
    }
  })
})
module.exports = router
