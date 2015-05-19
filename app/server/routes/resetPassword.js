var forgetPass = require('../connectors/forgetPass.js');

module.exports = {

    resetPasswordByEmail: function(req, res) {

        forgetPass.resetPassword(req, function(result) {
            console.log(" result ===  " + result);
            if (result === true) {
                res.render('logIn', {
                    title: 'node-login'
                });
            } else {

            }
        });
    }
};
