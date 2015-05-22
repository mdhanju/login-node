module.exports = {

    getHomePage: function(req, res) {
        var userId = req.body.username,
            pass = req.body.password,
            rem = req.body.rememder,
            authenticate = require('../connectors/authenticate.js');

        authenticate.authenticateUser(userId, pass, function(data) {
            var parseJson = require('../helpers/parseJson.js');
            var firstName = parseJson.getValueFromJson('firstName', data, function() {}) || '';
            var lastName = parseJson.getValueFromJson('lastName', data, function() {}) || '';

            var userId = firstName + ' ' + lastName;
            res.render('home', {
                title: 'node-login',
                name: userId
            });
        });
    }
};
