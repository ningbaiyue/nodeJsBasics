/*
 * @作者: NingBY
 * @Date: 2024-11-04 17:04:18
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
    res.render('login', { title: 'Express' });
});
  
  module.exports = router;