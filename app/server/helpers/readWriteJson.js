module.exports = {

    readJsonToFile: function(path, callback) {
        fs.readFile(path, 'utf8', function(err, data) {
            if (err) console.log(err);
            callback(JSON.parse(data));
        });
    },

    writeJsonTofile: function(path, data, callback) {
        var finalData = JSON.stringify(data);
        fs.writeFile(path, finalData, function(err) {
            if (err) console.log("Error writing file = " + err);
            callback("Successfully written ");
        });
    }
};
