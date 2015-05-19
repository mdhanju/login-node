module.exports = {

    getHomePage: function(req, res) {

        var userId = req.query.username;
        var pass = req.query.password;
        var rem = req.query.rememder;

        var authenticate = require('../connectors/authenticate.js');
        

        // console.log("Res = " + res);
        data = "Test User";
        
        authenticate.authenticateUser(userId, pass, function(data) {
            console.log(" DATA from data base = " + data);
            console.log("Getting Home Page");

            var parseJson = require('../helpers/parseJson.js');
            var firstName = parseJson.getValueFromJson('firstName', data, function(){});
            var lastName = parseJson.getValueFromJson('lastName', data, function(){});

            var userId = firstName + ' ' + lastName ;
            res.render('home', {
                title: 'node-login',
                name: userId
            });
        });
    }
};
