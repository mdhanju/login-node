module.exports = {
    generateEmailAuthCode: function(callback) {
        var code = Math.random().toString(36).slice(-10);
        require('./handleCode.js').setAuthCode(code);
        callback(code);
    },
    setAuthCode: function(code) {
        console.log("Code is saved");
        require('fs').writeFile('./database/code.txt', code, function(err) {
            if (err) console.log(" ***** GOT ERROR ***** ");
        });
    },
    getAuthCode: function(callback) {
        require('fs').readFile('./database/code.txt', function(err, data) {
            if (err) console.log(" ***** GOT ERROR ***** ");
            console.log("Code = " + data);
            callback(data);
        });
    }
};
