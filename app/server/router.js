var express = require('express');
var router = express.Router();

var homePage = require('./routes/home.js')
var resetPass = require('./routes/resetPassword.js')
var regiUser = require('./routes/registerUser.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', {
//         title: 'sms-reciever'
//     });
// });

// router.get('/resetPassword', function(res, req, next) {
//     console.log("Res = " + res.query.email);
//     req.send("Hello " + res.query.email);
// });
router.get('/', homePage.homePage);
router.get('/resetPassword', resetPass.resetPasswordByEmail);
router.get('/registerUser', regiUser.registerNewUser);

router.get('/home', function(res, req, next) {
    var userId = res.query.username;
    var pass = res.query.password;
    var rem = res.query.rememder;
    console.log("Res = " + res);
    req.send("home page  " + userId + "  " + pass + " == " + rem);
});

// oauth2callback
router.get('/oauth2callback', function(req, res, next) {
    var code = req.query.code;
    console.log(" REQUEST = " + code);
    res.render('index', {
        title: code
    });
});

module.exports = router;
