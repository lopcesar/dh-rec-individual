"use strict";

module.exports = (sequelize, dataTypes) => {
    const Serie = sequelize.define(
        "Serie",
        {
            title: dataTypes.STRING,
            cover_art: dataTypes.STRING,
        },
        { tableName: "series" }
    );
    /*  Serie.associate = function (models) {
    Serie.belongsTo(models.Season, {
        as: "season"
    });
  } */
    return Serie;
};
