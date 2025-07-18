
require('../../libs/db')
const UserRequests = require('../../models/usersrequests')

const AddServicePro = async (req, res) => {
    const userRequests = new UserRequests(req.body)
    let result = await userRequests.save()
    result = result.toJSON()
    console.log(result)
    res.send(result)
}

module.exports = AddServicePro;