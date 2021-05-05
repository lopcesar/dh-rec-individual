"use strict";
module.exports = (sequelize, DataTypes) => {
    const Season = sequelize.define(
        "Season",
        {
            title: DataTypes.STRING,
            rating: DataTypes.FLOAT(10)
        },
        {tableName: "season"}
    );
    Season.associate = function (models) {
        Season.belongsTo(models.Episode, {
            as: "episode",
        });
    }
    return Season;
}