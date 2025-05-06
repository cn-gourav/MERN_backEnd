const express = require('express');
const app = express();
const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req ,res) =>{
    if(req.url == "/about"){
        res.end("The about app")
    }

    if(req.url == "/"){
        res.end('hello world')
    }
    console.log(req.url)
})

server.listen(3000 , () =>{
    console.log("Server listening....")
})
