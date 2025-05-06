const express = require("express");
const app = express();
const morgan = require("morgan");
const userModel = require("./models/user");
const dbconnection = require("./config/db");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("about", (req, res) => {
  res.send("about page");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

const newUser =  await userModel.create({
    username: username,
    email: email,
    password: password,
  });
  res.send(newUser);
});

app.get('/get-users', (req,res) => {
    userModel.find().then((users) => {
        // you can also findone method
        // findone give null
        res.send(users)
    })
})

app.get('/update-user' ,async(req ,res) =>{
    await userModel.findOneAndUpdate({
        username: 'd'
    },{
        email:"cAfksdaf"
    })
    res.send("user update")
})

app.get('/delete-user',async (req,res) => {
    await userModel.findOneAndDelete({
        username: "d"
    })
    res.send('user-delete')
})
app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("data received");
});

app.listen(3000, () => {
  console.log("server listen");
});

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
