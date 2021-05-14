"use strict";
module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define(
        "Serie",
        {
            title: DataTypes.STRING,
            cover_art: DataTypes.STRING
        },
        { tableName: "serie" },
        
        
    );
 /*    Serie.associate = function (models) {
        Serie.hasMany(models.Season, {
            as: "season",
        });
       
    }; */
    return Serie;
};
