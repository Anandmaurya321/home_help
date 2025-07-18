

require('../../libs/db')
const UserRequests = require('../../models/usersrequests')

const DeleteService = async (req, res) => {
    const id = req.params.id;
    const result = await UserRequests.deleteOne({ "_id": id });
    console.log(result);
    res.send(result);
}

module.exports = DeleteService;