module.exports = {

    authenticateUser: function(userName, password, callback) {
        console.log("User Name = " + userName);
        console.log("Password = " + password);
        
        var fs = require('fs');
        var name = userName.replace('@', '').replace('.', '');

        fs.readFile('database/users/' + name + '.json', 'utf8', function(err, data) {
            if (err) console.log(err);
            callback(data);
        });
    }
};
