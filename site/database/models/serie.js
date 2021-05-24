'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Serie = sequelize.define(
    "Serie",
    {
    title: DataTypes.STRING,
    cover_art: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Serie',
  });
  return Serie;
};