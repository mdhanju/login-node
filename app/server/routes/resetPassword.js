module.exports = {

    resetPasswordByEmail: function(res, req) {
        console.log(" ================== ");
        console.log("Res = " + res.query.email);
        req.send("Hello " + res.query.email);
    }
};
