"use strict";
module.exports = (sequelize, DataTypes) => {
    const Episode = sequelize.define (
        "Episode",
        {
            title: DataTypes.STRING,
            releaseDate: DataTypes.DATE,
            length: DataTypes.INTEGER(10).UNSIGNED,
            rating: DataTypes.FLOAT(10)
        },
        {tableName: "episode"}
    )
    return Episode;
}