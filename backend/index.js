require('./db/mongoose');
const express = require('express');
const app = express();
var cors = require('cors');

//import routers
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');
const usersRoute = require('./routes/usersRoute');
app.use(express.json());
app.use(cors({    origin: '*'}));
app.use('/api/login',loginRoute);
app.use('/api/register',registerRoute); 
app.use('/api/users',usersRoute); 

app.listen(5000,()=>console.log('Server is running...'));