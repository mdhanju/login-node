module.exports = {

    getDashboard: function(req, res) {
        res.render('dashboard', {
            title: 'login-node'
        });
    }
};