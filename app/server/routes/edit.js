module.exports = {

    editProfile: function(req, res) {
        res.render('edit', {
            title: 'login-node',
            fname : "maninder"
        });
    }
};