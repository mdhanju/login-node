module.exports = {

    homePage: function(req, res) {
        res.render('index', {
            title: 'node-login'
        });
    }
};
