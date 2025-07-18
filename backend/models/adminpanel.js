
const mongoose = require('mongoose')

const AdminPanleSchema = new mongoose.Schema({
    password:String
})

// That Schema is defined for which collection : adminepassword ::
const AdminPassword = mongoose.model('adminpassword' , AdminPanleSchema)

module.exports = AdminPassword;
