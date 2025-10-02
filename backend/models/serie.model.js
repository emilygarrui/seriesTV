module.exports = (sequelize, Sequelize) => {
    const Serie = sequelize.define("serie", {
        title: {
            type: Sequelize.STRING
        },
        genre: {
            type: Sequelize.STRING
        }
    });

    return Serie;
};