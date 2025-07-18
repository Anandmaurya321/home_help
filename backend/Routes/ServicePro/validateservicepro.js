
require('../../libs/db') // importing connection ::
const ServicePro =  require('../../models/servicePro')

const ValidateServicePro = async(req , res)=>{
    const servicepro = new ServicePro(req.body)
    let result = await servicepro.save()
    result = await result.toJSON()
    console.log(result)
    res.send(result)
}

module.exports = ValidateServicePro;