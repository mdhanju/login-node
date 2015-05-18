module.exports = {

    findUser: function(req, res, callback) {
        var user = req.query.key;
        console.log(" On server  -- user to validate = " + user);
        if (user === "test@mail.com") result = true;
        else result = false;
        res.send(result);
    }
};
