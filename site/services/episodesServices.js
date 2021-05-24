const { Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Episode.findByPk(id);
    },
    findAll: async () => {
        return await Episode.findAll();
    },
};
