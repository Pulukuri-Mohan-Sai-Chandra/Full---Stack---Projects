const mongoose = require('mongoose')
require('dotenv').config()
class Database{
    constructor(){
        this._connect()
    }
    
    _getParams(){

        return {
            useNewUrlParser:true,

        }
    }
    _connect(){
        const conn = process.env.DBConnectionString
        console.log(conn)
        mongoose.connect(conn)
        .then(()=>{console.log(`Connection Established With Database`)})
        .catch(e =>{console.log(`Connection Failed to Establish with Database due to error ${e.message}`)})

    }
}

module.exports = new Database()