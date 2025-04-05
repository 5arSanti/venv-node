const express = require("express");

const tasksRouter = require("./tasks");

const routerApi = (app) => {
    const router = express.Router();
    app.use("/api/v1", router);

    router.use("/tasks", tasksRouter);
}

module.exports = { routerApi };
