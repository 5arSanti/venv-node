const express = require("express");
const cors = require("cors");
const { routerApi } = require("./routes");

const app = express();

const options = {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(express.json())
app.use(cors(options))

routerApi(app);

app.get("/", (request, response) => {
    return response.send("Hola desde el servidor backend del reto")
})

module.exports = app;
