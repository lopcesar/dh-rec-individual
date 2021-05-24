"use strict";
module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        "Actor",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            rating: DataTypes.FLOAT(3, 1),
            profilePic: DataTypes.STRING,
        },
        { tableName: "actors" }
    );
    Actor.associate = function (models) {
        Actor.belongsTo(models.Movie, {
            as: "favoriteMovie",
            foreignKey: "favoriteMovieId",
        });
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: models.ActorMovie,
            foreignKey: "actorId",
        });
       /*  Actor.belongsToMany(models.Episode, {
            as: "episode",
            through: models.ActorEpisode,
            foreignKey: "episodeId",
        }); */
    };
    return Actor;
};
