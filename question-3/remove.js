const fs = require("fs");

module.exports.clearLog = () => {
    if (fs.existsSync("logs/")){
     fs.readdir("./Logs" ,(err,data) => {
    
       for(let i = 0; i < data.length; i++){
        console.log("delete files..." + data[i])
       fs.unlink("logs/" + data[i],  (err,data) =>{if(err) console.log('erorr', err)})
    }
    fs.rmdir("logs/",(err,data) =>{if(err) console.log('erorr', err)})

    })
}
}