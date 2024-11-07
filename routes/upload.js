/*
 * @作者: NingBY
 * @Date: 2024-11-05 13:50:52
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  // 判断 req.session.user
  res.render('upload', { title: 'Express' });
});

module.exports = router