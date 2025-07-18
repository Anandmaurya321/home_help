
const jwt = require('jsonwebtoken');  // ✅ Use require instead of import unless using ES modules
const jwtKey = 'HomeHelp';

require('../../libs/db')  // importing connection 
const AdminPassword = require('../../models/adminpanel') // importing collection schema 

const Isadmin = async (req, res) => {
    const password = req.body.password; // Taking password

    if (!password) {
        return res.json({ data: 'Password is required' });
    }

    const data = await AdminPassword.findOne({ password: password });

    if (!data) { 
        return res.json({ data: 'Invalid user' })
    }
    
    // if giving currect password :: we have to send token
    // creating and sending the token :::
    jwt.sign({ data }, jwtKey, { expiresIn: '2hr' }, (err, token) => {
        console.log(token)
        if (err) {
            return res.json({ data: 'Something went wrong1sgo', valid: 0 });
        } else {
            // sending response in json
            return res.json({ data, auth: token, valid: 1 });  // 👍 Now includes matched count
        }
    });

}


module.exports = Isadmin;