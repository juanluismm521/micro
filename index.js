const express = require("express");
const path = require("path");
const fs = require("fs");
const front = require("./js/front.js");
var data = require("./data/data.json");

const PORT = 80;
const app = express();

app.use(
  "/css",
  express.static(path.join(__dirname + "/node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname + "/node_modules/bootstrap/dist/js"))
);
app.use("/js", express.static(path.join(__dirname + "/js")));
app.use("/data", express.static(path.join(__dirname + "/data")));

app.get("/hola", function (req, res) {
  res.send("Hola!");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/add/:permitido", function (req, res) {
  switch (req.params.permitido) {
    case "0":
        addData("No permitido");
        res.status(200).sendFile(__dirname + "/html/index.html");
      break;
    case "1":
      addData("Permitido");
      res.status(200).sendFile(__dirname + "/html/index.html");
      break;
    default:
      res.status(400).sendFile(__dirname + "/html/not_found.html");
      break;
  }
});

app.post("/", function (req, res) {
    vaciarData();
    res.status(200).sendFile(__dirname + "/html/index.html");
  });

app.listen(PORT);
console.log(`Server iniciado en el puerto ${PORT}`);
module.exports = app;

function addData(dato) {
  const entrada = {
    fecha: front.ahora(),
    permitido: dato,
  };

  data.push(entrada);

  fs.writeFile("./data/data.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
}

function vaciarData(){
    fs.createReadStream('./data/vacio.json').pipe(fs.createWriteStream('./data/data.json'));
}
