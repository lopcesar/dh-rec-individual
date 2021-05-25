'use strict';

module.exports = (sequelize, DataTypes) => {
  const Serie = sequelize.define(
    "Serie",
    {
    title: DataTypes.STRING,
    cover_art: DataTypes.STRING
  },
  {tableName: "series"},
  );
 /*  Serie.associate = function (models) {
    Serie.belongsTo(models.Season, {
        as: "season"
    });
  } */
  return Serie;
};