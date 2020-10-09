const fs = require("fs");
const path = require('path');
const process = require('process');

module.exports.addLog = () => {
    var dir = "./Logs/"

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
      
    }
    for(let i = 0; i < 10;i++){
        filename = "log" + i;
        fs.writeFileSync(dir + "/ "+ filename + ".txt", "This is a log file" ,(err,data) => {if(err) console.log('erorr', err)});
        console.log(filename + ".txt")
    }
 
}