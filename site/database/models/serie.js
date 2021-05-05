"use strict";
module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define(
        "Serie",
        {
            title: DataTypes.STRING,
            coverArt: DataTypes.STRING,
        },
        { tableName: "serie" }
    );
    Serie.associate = function (models) {
        Serie.belongsTo(models.Season, {
            as: "season",
        });
        /* Serie.belongsToMany(models.Actor, {
            as: "actors",
            through: models.ActorMovie,
            foreignKey: "movieId",
        }); */
    };
    return Serie;
};
