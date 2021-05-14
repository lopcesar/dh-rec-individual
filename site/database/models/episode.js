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
    Episode.associate = function(models) {
        Episode.belongsTo(models.Season, {
            as: "season"
        });
        Episode.belongsToMany(models.Actor, {
            as: "actors",
            through: models.ActorEpisode,
            foreignKey: "actorId",
        });
    }
    return Episode;
}