



require('../../libs/db')
const ServicePro = require('../../models/servicePro')

const DeleteServicePro = async (req, res) => {
    const id = req.params.id;
    const result = await ServicePro.deleteOne({ "_id": id });
    res.send(result);
}


module.exports = DeleteServicePro;