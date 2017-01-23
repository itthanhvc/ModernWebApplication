fs = require('fs');
function FileReader() {

}
FileReader.prototype.readFileContent = function (filePath, requireJsonConverter, encoding) {
    encoding = encoding | "utf8";
    requireJsonConverter = requireJsonConverter | false;
    return new Promise(function (resolve, reject) {
        console.log("readFileContent-1-" + filePath);
        var stream = fs.createReadStream(filePath, encoding);
        // subscribe event when data done
        stream.on("data", function (data) {
            if (requireJsonConverter) {
                resolve(JSON.parse(data));
                return;
            }
            resolve(data);
        })
        // subscribe event when data error
        .on('error', function (err) {
            console.log("readFileContent-2-" + err.toString());
            reject(err.toString());
        });
    });
}

FileReader.prototype.saveRequestBody = function (text) {
    return new Promise(function (resolve, reject) {
        var stream = fs.createWriteStream("././sampleFiles/request" + new Date().getTime() + ".txt", { flag: "w" });
        stream.write(text);
        resolve("done");
        stream.end();
    });
}
module.exports = new FileReader();