module.exports = {

    verifyUserCode: function(req, res) {
        var userCode = req.body.userCode;
        var result = false;
        console.log("USER CODE = " + userCode);
        require('../helpers/handleCode.js').getAuthCode(function(data) {
            console.log("User Code User = " + userCode);
            console.log("User Code Data = " + data);
            if (userCode == data) result = true;
            res.send(result);
        });
    }
};
