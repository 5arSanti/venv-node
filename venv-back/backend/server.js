const express = require("express");
const cors = require("cors");
const { routerApi } = require("./routes/index.js");

const app = express();

const options = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}

app.use(express.json())
app.use(cors(options));

routerApi(app);

app.get("/", (_, response) => {
    return response.send("Hola desde el servidor backend del reto");
});

module.exports = app;
