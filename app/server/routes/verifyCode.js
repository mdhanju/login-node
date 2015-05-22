module.exports = {

    verifyUserCode: function(req, res) {
    	console.log(req)
    	var userCode = req.body.userCode;
    	var result = false;
    	console.log("USER CODE = " + userCode)
    	if (userCode == "123456") result = true;
        res.send(result);
    }
};