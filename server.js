const express = require('express'); 
const dbConnection = require('./Connection/Connect');
const cors = require('cors');
const { router } = require('./routes/router');
const app = express(); 
const PORT = 7000; 
app.use(cors());
app.use(express.json());

dbConnection();

app.use('/', router);

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 