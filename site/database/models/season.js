'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const Season = sequelize.define(
  "Season",
  {
    title: DataTypes.STRING,
    rating: DataTypes.NUMBER
  }, { }
  );
 /*  Season.associate = function (models) {
    Season.belongsTo(models.Serie, {
        as: "serie"
    })
    Season.hasMany(models.Episode, {
        as: "episode",
    });
} */
  return Season;
};