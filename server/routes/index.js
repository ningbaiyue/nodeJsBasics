var express = require('express');
const JWT = require('../util/JWT');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  // 判断 req.session.user
  res.render('index', { title: 'Express' });
});

// const jwt = require("jsonwebtoken")
// var token = jwt.sign({
//   data: 'nby'
// }, 'anydata', { expiresIn: 10000 });
// console.log(token);

// setTimeout(() => {
//   var decoded = jwt.verify(token, 'anydata')
//   console.log(decoded);
// }, 11000)


/*测试 token的 加密与验证过程*/

// const token = JWT.generate({name:"nby"},10000)

// console.log(JWT.verify(token))

// setTimeout(()=>{
//   console.log(JWT.verify(token))

// },9000)

// setTimeout(()=>{
//   console.log(JWT.verify(token))

// },11000)
module.exports = router;
