var express = require('express')
var mysql = require('mysql')
const cors = require('cors')

var app = express()
app.use(express.json())
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
app.post('/api/articulos', (req, res)=> {
    let data = {
                descripcion: req.body.descripcion,
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
    let data = {
                Nombre: req.body.nombre,
                Direccion: req.body.direccion,
                RFC: req.body.rfc};
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
    let cveCli = req.params.id;
    let Nombre = req.body.nombre;
    let Direccion = req.body.direccion;
    let RFC = req.body.rfc;

    let sql = "UPDATE clientes SET Nombre = ?, Direccion = ?, RFC = ? WHERE cveCli = ?";
    conexion.query(sql, [Nombre, Direccion, RFC, cveCli], function(error, results){
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
    conexion.query('DELETE FROM clientes WHERE cveCli = ?', [id], function(error, results){
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
    let data = {
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                rfc: req.body.rfc,
                telefono: req.body.telefono,
                observaciones:req.body.observaciones,
                };
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
    let nombre= req.body.nombre;
    let direccion= req.body.direccion;
    let rfc = req.body.rfc;
    let telefono= req.body.telefono;
    let observaciones=req.body.observaciones;

    let sql = "UPDATE proveedores SET Nombre = ?, Direccion = ?, RFC = ?,Telefono=?, Observaciones=? WHERE cveProv = ?";
    conexion.query(sql, [nombre, direccion, rfc,telefono,observaciones, id], function(error, results){
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
    conexion.query('DELETE FROM proveedores WHERE cveProv = ?', [id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//Altas
//Get de altas
app.get('/api/altas',(req,res)=>
{
    conexion.query('SELECT * FROM altas', (error, filas)=>
    {
        if(error)
        {
            throw error;
        }else{
            res.send(filas)
        }
    })
})
//Post Altas
app.post('/api/altas', function(req, res){
    let data = {
                cveArt: req.body.cveArt,
                cantidad: req.body.cantidad,
                costo:req.body.costo,
                proveedor: req.body.proveedor};
    let sql = "INSERT INTO altas SET ?";
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})
//Delete Altas
app.delete('/api/altas/:id', function(req, res){
    let id = req.params.id;
    conexion.query('DELETE FROM altas WHERE cveArt = ?', [id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})
//Actualizar articulos desde altas
app.put('/api/altas/', function(req, res){
    let id = req.body.cveArt;
    let cantidad = req.body.cantidad;

    let sql = "UPDATE articulos SET cantidad = cantidad + ? WHERE id = ?";
    conexion.query(sql, [cantidad, id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//Bajas
//Get de bajas
app.get('/api/bajas',(req,res)=>
{
    conexion.query('SELECT * FROM bajas', (error, filas)=>
    {
        if(error)
        {
            throw error;
        }else{
            res.send(filas)
        }
    })
})
//Post bajas
app.post('/api/bajas', function(req, res){
    let data = {
                cveArt: req.body.cveArt,
                cantidad: req.body.cantidad,
                precioventa:req.body.pv,
                cliente: req.body.cliente
            };
    let sql = "INSERT INTO bajas SET ?";
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})
//Delete bajas
app.delete('/api/bajas/:id', function(req, res){
    let id = req.params.id;
    conexion.query('DELETE FROM bajas WHERE cveArt = ?', [id], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})
//Actualizar articulos desde bajas
app.put('/api/bajas/', function(req, res){
    let id = req.body.cveArt;
    let cantidad = req.body.cantidad;

    let sql = "UPDATE articulos SET cantidad = cantidad - ? WHERE id = ?";
    conexion.query(sql, [cantidad, id], function(error, results){
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
