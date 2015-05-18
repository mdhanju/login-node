module.exports = {

    resetPassword: function(data, callback) {
        var result = false;
        var regEmail = data.query.email;

        console.log(" ***** PASSWORD RESET SUCESSFULL ***** ");
        if (regEmail) result = true;
        callback(result);
    }
};
