var express = require('express');
var router = express.Router();
var Email = require('email').Email;

// Home Route
router.post('/send', function(req, res) {
  // need to get Sendmail for this to work.....
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var myMsg = new Email({
    from:email,
    to: 'lphan1989@gmail.com',
    subject: "portfolio email",
    body:"from user:" + name + " " + "message: " + message
  });
  myMsg.send(function (err) {
    if (err) {
      console.log(err)
    }
    console.log('sent')
  })
});

module.exports = router;
