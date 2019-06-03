const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

//
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type, x-access-token");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.get('/', (req, res) => {
    res.end("Welcome to root path")
})

app.get('/home', (req, res) => {
    res.end("Welcome to home path")
})

app.post('/api', (req, res) => {
    const feedback = req.body.feedback
    const username = req.body.username
    // res.end("Username: " + username + " , Feedback: " + feedback)
    res.json({resuult: "success" ,username: username , feedback: feedback})
})

app.listen(3000, (req, res) => {
    console.log('server is running....')
})