var express = require('express')
var mysql = require('mysql')
const cors = require('cors')

var app = express()
app.use(cors());

//Parametros de conexion
var conexion = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'tienda_articulos'
});

//Nos conectamos
conexion.connect(function(error){
    if(error)
    {
        throw error;
    }else{
        console.log("Conexion exitosa");
    }

})

//Articulos
//Get de articulos
app.get('/api/articulos',(req,res)=>
{
    conexion.query('SELECT * FROM articulos', (error, filas)=>
    {
        if(error)
        {
            throw error;
        }else{
            res.send(filas)
        }
    })
})

//Get articulo por id
app.get('/api/articulos/:id',(req,res)=>
{
    conexion.query('SELECT *FROM articulos WHERE id = ?',[req.params.id], (error, fila)=>
    {
        if(error)
        {
            throw error;
        }else{
            res.send(fila)
        }
    })
})

//Post Articulos
app.post('/api/articulos', function(req, res){
    let data = {descripcion: req.body.descripcion,
                precio: req.body.precio,
                cantidad: req.body.cantidad};
    let sql = "INSERT INTO articulos SET ?";
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//Put Articulos
app.put('/api/articulos/:id', function(req, res){
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let cantidad = req.body.cantidad;

    let sql = "UPDATE articulos SET descripcion = ?, precio = ?, cantidad = ? WHERE id = ?";
    conexion.query(sql, [descripcion, precio, cantidad, id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//Delete Articulos
app.delete('/api/articulos/:id', function(req, res){
    let id = req.params.id;
    conexion.query('DELETE FROM articulos WHERE id = ?', [id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})



//Clientes
//Get de clientes
app.get('/api/clientes',(req,res)=>
{
    conexion.query('SELECT * FROM clientes', (error, filas)=>
    {
        if(error)
        {
            throw error;
        }else{
            res.send(filas)
        }
    })
})
//Get cliente por id
app.get('/api/clientes/:id',(req,res)=>
{
    conexion.query('SELECT *FROM clientes WHERE cveCli = ?',[req.params.id], (error, fila)=>
    {
        if(error)
        {
            throw error;
        }else{
            res.send(fila)
        }
    })
})

//Post Clientes
app.post('/api/clientes', function(req, res){
    let data = {descripcion: req.body.descripcion,
                precio: req.body.precio,
                cantidad: req.body.cantidad};
    let sql = "INSERT INTO clientes SET ?";
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//Put Clientes
app.put('/api/clientes/:id', function(req, res){
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let cantidad = req.body.cantidad;

    let sql = "UPDATE clientes SET descripcion = ?, precio = ?, cantidad = ? WHERE id = ?";
    conexion.query(sql, [descripcion, precio, cantidad, id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//Delete Clientes
app.delete('/api/clientes/:id', function(req, res){
    let id = req.params.id;
    conexion.query('DELETE FROM clientes WHERE id = ?', [id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})


//Proveedores
//Get de proveedores
app.get('/api/proveedores',(req,res)=>
{
    conexion.query('SELECT * FROM proveedores', (error, filas)=>
    {
        if(error)
        {
            throw error;
        }else{
            res.send(filas)
        }
    })
})

//Get cliente por id
app.get('/api/proveedores/:id',(req,res)=>
{
    conexion.query('SELECT *FROM proveedores WHERE cveProv = ?',[req.params.id], (error, fila)=>
    {
        if(error)
        {
            throw error;
        }else{
            res.send(fila)
        }
    })
})

//Post Proveedores
app.post('/api/proveedores', function(req, res){
    let data = {descripcion: req.body.descripcion,
                precio: req.body.precio,
                cantidad: req.body.cantidad};
    let sql = "INSERT INTO proveedores SET ?";
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//Put Proveedores
app.put('/api/proveedores/:id', function(req, res){
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let cantidad = req.body.cantidad;

    let sql = "UPDATE proveedores SET descripcion = ?, precio = ?, cantidad = ? WHERE id = ?";
    conexion.query(sql, [descripcion, precio, cantidad, id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//Delete Proveedores
app.delete('/api/proveedores/:id', function(req, res){
    let id = req.params.id;
    conexion.query('DELETE FROM proveedores WHERE id = ?', [id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})






//Mensaje del servidor
app.get('/',function(req, res)
{
    res.send('Estas dentro del servidor de Articulos')
})
//Escucha del servidor
app.listen('2604',function()
    {
        console.log('Te escucho desde el puerto 2604')
    }
)
