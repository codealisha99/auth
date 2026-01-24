const express = require('express');
const app = express();

app.use(express.json());

const users = [];


function generatetoken(){
    return Math.random()
}



app.post('/signup', function(req, res) {
     const username = req.body.username;
     const password = req.body.password;


     users.push({ username, password });


     res.json({ message: 'User signed up successfully' });
})
    
app.post('/signin', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;


    let foundUser = null;

    for (let user of users) {
        if (user.username === username && user.password === password) {
            foundUser = user;
            break;
        }
    }

    if(foundUser) {
        const token = generatetoken();
        res.json({ 
            message: 'Sign in successful',
             token: token 
            });
            }
            else {
                res.status(403).json({ message: 'invalid credentials'});
            }

            console.log(users);

})

app.get('/me', function(req, res){
    
})

app.listen(3000);