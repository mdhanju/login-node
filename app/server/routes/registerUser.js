var fs = require('fs');

module.exports = {

    registerNewUser: function(res, req) {
        var result = res.body;
        var userId = result.email;

        var addId = require('./registerUser.js');


        var name = "nameee";//userId.replace('@', '').replace('.', '');
        var filePath = 'database/users/' + name + '.json';
        var data = JSON.stringify(result);

        fs.readFile(filePath, function(err) {
            if (err) {
                fs.writeFile(filePath, data, function(err) {
                    if (err) console.log(err);
                    
                    console.log(" Done !!");

                    addId.adduserId(userId, function(err) {
                        if (err) console.log(err);
                    });
                });
            } else {
                console.log('User already exist');
            }
        });

        req.send("Sucess");
        // req.send("Please wait \n we are in process of registering your user ");
        // req.render('logIn', {
        //     title: 'node-login'
        // });
    },
    adduserId: function(user, callback) {
        fs.readFile('database/users/users.json', 'utf8', function(err, data) {
            if (err) console.log(err);
            var userList = JSON.parse(data);
            userList.push(user);
            var finalData = JSON.stringify(userList);
            fs.writeFile('database/users/users.json', finalData, function(err) {
                if (err) console.log(err);
                console.log(" User added to list ");

            });
        });
    }
};
