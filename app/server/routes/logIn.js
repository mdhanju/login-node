module.exports = {

    logInPage: function(req, res) {
        res.render('logIn', {
            title: 'node-login'
        });
    }
};
