

require('../../libs/db') // impoting connection ::
const ServicePro = require('../../models/servicePro') // importing model

const AllServicePro = async (req, res) => {
    const result = await ServicePro.find()
    res.send(result)
}


module.exports =  AllServicePro;