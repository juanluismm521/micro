const express = require('express')
const path = require('path')


const PORT = 80;
const app = express();


app.use('/css', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname + '/js')));

app.get('/hola', function(req,res){
    res.send("Hola!");
});

app.get("/", inicio);

function inicio (peticion, resultado)
{
   resultado.sendFile(__dirname + "/html/index.html");
}


app.listen(PORT)
console.log(`Server iniciado en el puerto ${PORT}`);
