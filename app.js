const express = require('express');
const app = express();
const morgan = require('morgan')


app.use(morgan('dev'))

app.set('view engine','ejs')

app.use((req,res,next)=>{
    console.log('this is middleware')
    // res.send("this is middleware")
    morgan(':method :url :status :res[content-length] - :response-time ms')
    return next()
})

app.get('/', (req,res,next) =>{
    const a = 5
    const b = 6

    console.log(a+b)
    return next()
} ,(req,res) =>{
    res.render('index')
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
