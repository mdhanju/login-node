var fs = require('fs');

module.exports = {

    registerNewUser: function(res, req) {
        var result = res.query;
        var userId = result.email.replace('@', '').replace('.', '');
        var filePath = 'database/users/' + userId + '.json';
        var data = JSON.stringify(result);

        fs.readFile(filePath, function(err) {
            if (err) {
                fs.writeFile(filePath, data, function(err) {
                    if (err) console.log(err);
                    console.log(" Done !!");
                });
            } else {
                console.log('User already exist');
            }
        });


        req.send("Please wait \n we are in process of registering your user ");
    }
};
