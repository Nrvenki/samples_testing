import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const users = [
    {id : 1, name : "siva"},
    {id : 2, name : "ash"},
]

//get

app.get('/',(req,res) => {
    console.log("Root");
});

app.get('/api/users', (req,res) => {
    res.send(users);
})