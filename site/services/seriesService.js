const { Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Serie.findByPk(id);
    },
    findAll: async () => {
        return await Serie.findAll();
    },
};
