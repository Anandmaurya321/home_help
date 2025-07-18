


require('../../libs/db')  
const ServicePro =  require('../../models/servicePro')

const ViewServicePro = async(req , res)=>{
    let service = req.params.service;
    const servicepro = await ServicePro.find({service: service})
    res.send(servicepro)
}

module.exports = ViewServicePro;