
const mongoose = require('mongoose')

const ServiceProSchema = new mongoose.Schema({
    name:String ,
    service:String,
    experence:String,
    contact:String,
    address:String,
    location:{
        latitude:String ,
        longitude:String
    }
})

const ServicePro = mongoose.model('servicepros' , ServiceProSchema)

module.exports = ServicePro;