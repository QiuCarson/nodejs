var express = require('express');
var router = express.Router();

//var myoption = require('../model/options');
var indexRecords = require('../routes/indexRecords');

//myoption.optionlist({name:'blogname'})
/* GET home page. */

router.get('/', indexRecords);

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'test' });
});

module.exports = router;
