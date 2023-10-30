const express = require("express");
const bodyParser = require("body-parser");


const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const {Airport, city, Airplane} = require('./models/index');
const sequelize = require('sequelize');
const db = require('./models/index');

const setupAndStartServer = async() =>{
    // create the express object.

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);
    

    app.listen(PORT, async ()=>{
        console.log(`the server is started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }

      
    });
}

setupAndStartServer();