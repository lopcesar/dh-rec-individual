'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ActorEpisodes = sequelize.define(
    'ActorEpisodes',
    {
    actorId: DataTypes.INTEGER,
    episodeId: DataTypes.INTEGER
  }, {
    tableName: "actor_episode"
   }
  );
  return ActorEpisodes;
};