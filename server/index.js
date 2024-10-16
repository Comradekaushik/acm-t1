
const express = require('express');
const fs = require('fs');
const path = require('path');



const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const port = 9090;
const host = 'http://127.0.0.1:' + port;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/login",async(req,res)=>{
    

    try {
        const filePath = path.join(__dirname, 'data.json');
        fs.readFile(filePath, 'utf8', (err, jsonData) => {
            if (err) {
                console.error('error reading file', err);
                return;
            }
        
           
            const data = JSON.parse(jsonData);
        
            
            const findValue = (key, value) => {
                return data.find(item => item[key] === value);
            };


        
            
            const result = findValue('username',req.body.username );
            if(result){
                if(result.password === req.body.password){
                    res.json({"Authorize" : "yes"});
                }
                else{
                    res.json({"Authorize" : "no"});

                }
            }
            else{
                res.json({"Authorize" : "usernotfound"});
            }
            console.log(result); 
        });        
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Error during authentication");
        
    }

});



app.post("/register",async(req,res)=>{
    

    try {
        const filePath1 = path.join(__dirname, 'data.json');
        const filePath2 = path.join(__dirname, 'data2.json');

        const accepteddata1 = {
            username: req.body.username,
            password : req.body.password
        };
        const accepteddata2 = {
            username: req.body.username,
            password : req.body.password,
            about : req.body.about
        };

        fs.readFile(filePath1, 'utf8', (err, jsonData) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
        
            
            let data = JSON.parse(jsonData);
        
            
            const newUser = {
                "username": req.body.username,
                "password": req.body.password
            };
        
            
            data.push(newUser);
        
            
            const updatedJsonData = JSON.stringify(data, null, 2);
        
            
            fs.writeFile(filePath1, updatedJsonData, (err) => {
                if (err) {
                    console.error('Error writing to file data.json:', err);
                    return;
                }
                console.log('New user added successfully-op1');
            });
        });

        fs.readFile(filePath2, 'utf8', (err, jsonData) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
        
            
            let data = JSON.parse(jsonData);
        
            
            const newUser = {
                "username": req.body.username,
                "about": req.body.about
            };
        
            
            data.push(newUser);
        
            
            const updatedJsonData = JSON.stringify(data, null, 2);
        
            
            fs.writeFile(filePath2, updatedJsonData, (err) => {
                if (err) {
                    console.error('Error writing to file data2.json:', err);
                    return;
                }
                console.log('New user added successfully-op2');
            });
        });

        res.json({"registered" : "yes"});
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Error registering user");
        
    }

});


app.get('/users', async (req, res) => {
    

    try {
        const filePath = path.join(__dirname, 'data2.json');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error  reading file:', err);
                res.status(500).send(' Error');
                return;
            }
            res.json(JSON.parse(data));
        });
        
     
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching users");
    }
});

app.listen(port, () => console.log( `Server is running on port ${port} and host is ${host}`));

