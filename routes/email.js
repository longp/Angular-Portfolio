var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport")
// Home Route
router.get('/send', function(req,res) {
  res.send(process.env.GMAIL_USER)
})

router.post('/send', function(req, res) {
  // need to get Sendmail for this to work.....

  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var phone = req.body.phone
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user :'bangicku@gmail.com',
      pass : 'silver63'
    }
  });
  email_message = '<div><h1>name:' + name + '</h1></div><br>'
  email_message += '<div>email:' + email + '</div><br>'
  email_message += '<div>phone:' + phone + '</div><br>'
  email_message += '<div>message:' + message + '</div><br>'
  console.log('SMTP Configured');
  var mailOptions={
          from : "Angular-Portfolio " + email ,
          to : 'lphan1989@gmail.com',
          subject : "Portfolio Contact",
          html :email_message

  }
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
});

module.exports = router;
