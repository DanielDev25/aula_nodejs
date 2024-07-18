const express = require('express')
const app = express()

app.get('/', olamundo)

app.listen(3000)
console.log("Aplicação rodando");

function olamundo (req, res){
    res.send("Olá mundo.")
}