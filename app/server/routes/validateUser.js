module.exports = {

    findUser: function(req, res, callback) {
        var userId = req.query.key;
        var result = false;
        console.log(" On server  -- user to validate = " + userId);
        
        //Reading users.json from database
        // currently data is all json
        require('fs').readFile('database/users/users.json', 'utf8', function(err, data) {
        	if (err) console.log(err);
        	var userList = JSON.parse(data);

        	for(var user in userList){
        		if (userId === userList[user]) result = true;
        	}
        	res.send(result);
        });

        
    }
};
