'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define(
    "Episode",
    {
    title: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    length: DataTypes.FLOAT,
    rating: DataTypes.FLOAT
  }, 
  { }
  );
 /*  Episode.associate = function(models) {
    Episode.belongsTo(models.Season, {
        as: "season"
    });
    Episode.belongsToMany(models.Actor, {
        as: "actors",
        through: models.ActorEpisode,
        foreignKey: "actorId",
    });
  } */
  return Episode;
};