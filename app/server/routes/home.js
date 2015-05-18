module.exports = {

    getHomePage: function(req, res) {

        var userId = req.query.username;
        var pass = req.query.password;
        var rem = req.query.rememder;
        // console.log("Res = " + res);

        console.log("Getting Home Page");

        console.log("home page  " + userId + "  " + pass + " == " + rem);
        
        res.render('index', {
            title: 'node-login'
        });
    }
};
