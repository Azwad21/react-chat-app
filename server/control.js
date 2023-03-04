const fs = require("fs");
const infoFile = JSON.parse(fs.readFileSync("./info.json"));

function getData(data_name, callback) {
    fs.readFile("./info.json", "utf-8", (err,data) => {
        if (err) throw err
        console.log(data_name in JSON.parse(data))

        if (data_name in JSON.parse(data)) {
            callback(JSON.parse(data)[data_name])
        }
    })
}

const setPin = (pin) => {
	infoFile.pin = pin
	fs.writeFileSync(JSON.stringify(infoFile))
}

const checkPin = (pin) => {
	if (infoFile.pin == pin) return true
	else return false
}

module.exports = {
	setPin,
	checkPin,
    getData
}