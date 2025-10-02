module.exports = app => {
    const series = require("../controllers/serie.controller.js");

    var router = require("express").Router();

    router.post("/", series.create);

    router.get("/", series.findAll);

    router.get("/:id", series.findOne);

    router.put("/:id", series.update);

    router.delete("/:id", series.delete);

    app.use('/api/series', router);
};