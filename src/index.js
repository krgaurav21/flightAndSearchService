const express = require("express");
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async() =>{
    // create the express object.

    const app = express();
    

    app.listen(PORT, ()=>{
        console.log(`the server is started at ${PORT}`);
      
    });
}

setupAndStartServer();