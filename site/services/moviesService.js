const { Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Movie.findByPk(id, {
            include: ["actors", "genre"],
        });
    },
    findAll: async () => {
        return await Movie.findAll({
            include: ["actors", "genre"],
        });
    },
};
