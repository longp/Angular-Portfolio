var express = require('express');
var router = express.Router();

// Home Route
router.get('*', function(req, res) {
  // console.log(res)
  res.render('index');
});

module.exports = router;
