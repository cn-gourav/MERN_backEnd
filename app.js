const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('hello world')
})

app.get('about', (req ,res) =>{
    res.send('about page')
})

app.listen(3000 , ()=>{
    console.log('server listen')
})



// const http = require('http');
// const { url } = require('inspector');

// const server = http.createServer((req ,res) =>{
//     if(req.url == "/about"){
//         res.end("The about app")
//     }

//     if(req.url == "/"){
//         res.end('hello world')
//     }
//     console.log(req.url)
// })

// server.listen(3000 , () =>{
//     console.log("Server listening....")
// })
