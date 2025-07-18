
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

const UserRequests = mongoose.model('usersrequests' , ServiceProSchema)

module.exports = UserRequests;