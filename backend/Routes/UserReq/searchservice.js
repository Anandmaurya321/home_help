


require('../../libs/db')
const UserRequests = require('../../models/usersrequests')

const SearchService = async (req, res) => {
   const result = await UserRequests.find()
    res.send(result) 
}

module.exports = SearchService;