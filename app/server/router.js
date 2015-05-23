var express = require('express');
var router = express.Router();

var logIn = require('./routes/logIn.js')
var resetPass = require('./routes/resetPassword.js')
var regiUser = require('./routes/registerUser.js')
var register = require('./routes/register.js')
var requestCode = require('./routes/requestVerCode.js')
var verifyCode = require('./routes/verifyCode.js')
var homePage = require('./routes/home.js')
var validateUser = require('./routes/validateUser.js')

router.get('/', logIn.logInPage);
router.get('/register', register.register);

router.post('/resetPassword', resetPass.resetPasswordByEmail);
router.post('/registerUser', regiUser.registerNewUser);
router.post('/requestCode', requestCode.sendEmailCode);

router.post('/verifyCode', verifyCode.verifyUserCode);

router.get('/validateUser', validateUser.findUser);

// oauth2callback
router.get('/oauth2callback', function(req, res, next) {
    var code = req.query.code;
    console.log(" REQUEST = " + code);
    res.render('index', {
        title: code
    });
});

router.post('/home', homePage.getHomePage);

module.exports = router;