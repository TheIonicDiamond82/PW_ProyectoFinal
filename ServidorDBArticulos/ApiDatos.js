var express = require('express')
var mysql = require('mysql')

var app = express()

app.get('/',function(req, res)
{
    res.send('Estas dentro del servidor de Articulos')
})

app.listen('2604',function()
    {
        console.log('Te escucho desde el puerto 2604')
    }
)
