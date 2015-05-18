var express = require('express');
var router = express.Router();

var logIn = require('./routes/logIn.js')
var resetPass = require('./routes/resetPassword.js')
var regiUser = require('./routes/registerUser.js')
var homePage = require('./routes/home.js')
var validateUser = require('./routes/validateUser.js')

router.get('/', logIn.logInPage);
router.get('/resetPassword', resetPass.resetPasswordByEmail);
router.get('/registerUser', regiUser.registerNewUser);

router.get('/home', homePage.getHomePage);
router.get('/validateUser', validateUser.findUser);

// oauth2callback
router.get('/oauth2callback', function(req, res, next) {
    var code = req.query.code;
    console.log(" REQUEST = " + code);
    res.render('index', {
        title: code
    });
});

module.exports = router;
