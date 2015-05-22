module.exports = {

    authenticateUser: function(userName, password, callback) {
        var fs = require('fs');
        var name;
        if (typeof userName === "string") name = userName.replace('@', '').replace('.', '');
    
        fs.readFile('database/users/' + name + '.json', 'utf8', function(err, data) {
            if (err) console.log(err);
            callback(data);
        });
    }
};
