
const express = require('express')
const cors = require('cors')
const http = require('http')
require('./libs/db')
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cors()) // middleware to allow cross-origin requests

// now lets setup server
const server = http.createServer(app);


const setupSocket = require('./libs/socket');
setupSocket(server);  // 👈 passing `server` to the function


const verifyToken = require('./middleware/authmiddleware');


// handling routes :::

const ValidateServicePro =  require ('./Routes/ServicePro/validateservicepro');
app.post('/validateservicepro',verifyToken, ValidateServicePro)


const ViewServicePro = require ('./Routes/ServicePro/viewservicepro');
app.get('/viewservicepro/:service', ViewServicePro)


const Searchservicepro =  require('./Routes/ServicePro/searchservicepro');
app.get('/allservice/:key', Searchservicepro)


const AllServicePro = require('./Routes/ServicePro/allservicepro');
app.get('/allservice', AllServicePro)


const Deleteservicepro =  require('./Routes/ServicePro/deleteservicepro');
app.delete('/deleteservice/:id' , verifyToken , Deleteservicepro)




const Adminpanel = require('./Routes/Admin/adminpanel')
app.post('/adminpanel' , Adminpanel)


const Searchservice = require('./Routes/UserReq/searchservice')
app.get('/search_service_req', verifyToken , Searchservice)


const Addservicepro = require('./Routes/UserReq/addservicepro')
app.post('/addservicepro' , Addservicepro)


const Deleteservice =  require('./Routes/UserReq/deleteservice')
app.delete('/deleteservicereq/:id' , verifyToken ,  Deleteservice)




server.listen(port , () => {
    console.log("Server started on http://localhost:5000");
});

