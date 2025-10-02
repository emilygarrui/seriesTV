const db = require("../models");
const Serie = db.series;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
        });
        return;
    }

    const serie = {
        title: req.body.title,
        genre: req.body.genre
    };

    Serie.create(serie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the serie."
            });
        });
};

exports.findAll = (req, res) => {
    Serie.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving series."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Serie.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Serie with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Serie with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Serie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Serie was update successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Serie with id=${id}. Maybe Serie was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Serie with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Serie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Serie was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Serie with id=${id}. Maybe Serie was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Serie with id=" + id
            });
        });
};