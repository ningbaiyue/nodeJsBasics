var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/user", (req, res) => {
  console.log(req.body);
  //插入数据库
  // 1. 创建一个模型(user,限制filed类型), 一一对应数据库的集合(users)
  // user.create user.find user.delete user.update
  const { username, password, age } = req.body
  UserModel.create({
    username, password, age
  }).then(data => {
    console.log(data)
    res.send({
      ok: 1
    })
  })
})
// 动态路由, 获取id
router.put("/user/:myid", (req, res) => {
  console.log(req.body, req.params.myid);
  const { username, password, age } = req.body
  UserModel.updateOne({ _id: req.params.myid }, {
    username, password, age
  }).then(data => {
    res.send({
      ok: 1
    })
  })
})

router.delete("/user/:id", (req, res) => {
  UserModel.deleteOne({
    _id: req.params.id
  }).then(data => {
    res.send({
      ok: 1
    })
  })
})

router.get("/user", (req, res) => {
  console.log(req.query);
  const { page, limit } = req.query
  UserModel.find({}, ["username", "age"]).sort({
    age: -1
  }).skip((page - 1) * limit).limit(limit).then(data => {
    res.send(data)
  })
})

module.exports = router;
