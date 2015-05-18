module.exports = {

    logInPage: function(req, res) {
        res.render('index', {
            title: 'node-login'
        });
    }
};
