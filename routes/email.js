var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport")


router.post('/send', function(req, res) {

  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var phone = req.body.phone
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
      user :process.env.GMAIL_USER,
      pass : process.env.GMAIL_PASS
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
          return  console.log(error || response);
      }
      console.log('Message sent: ' + info.response);
  });
});

module.exports = router;
