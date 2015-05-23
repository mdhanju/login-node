module.exports = {

    sendCodeEmail: function(to_address, verCode, callback) {

        var sg_username = "us94536@gmail.com";
        var sg_password = "Amritsar123";

        var text_body = "Hello,\n\nThis is message contains verification code from Login-node. We have sent this to you because you requested a verification code to register your account.\n\n Verification Code is " + verCode + " \n\nThanks for your interest,\n\n Maninder";
        var sendgrid = require("sendgrid")(sg_username, sg_password);
        var result = false;
        try {
            sendgrid.send({
                to: to_address,
                from: "registration@login-node.com",
                subject: "Verification Code from Login-node",
                text: text_body
            }, function(err, json) {
                if (err) return console.error(err);
                console.log(json.message);
                if (json.message == 'success') callback(true);
            });
        } catch (e) {
            console.log(e);
        }
    }
};
