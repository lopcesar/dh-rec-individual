"use strict";
module.exports = (sequelize, DataTypes) => {
    const ActorEpisode = sequelize.define(
        "ActorEpisode",
        {
            screentime: DataTypes.INTEGER(10).UNSIGNED,
        },
        {tableName: "actor_episode"}
    )
    return ActorEpisode;
}