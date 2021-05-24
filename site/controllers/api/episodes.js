const episodesServices = require("../../services/episodesServices");

module.exports = {
    index: async (req, res) => {
        const series = await episodesServices.findAll();
        res.send({count: series.length, series:series});
    },

    detail: async (req, res) => {
        const serie = await episodesServices.findOne(req.params.id);
        res.send(serie);
    },
}