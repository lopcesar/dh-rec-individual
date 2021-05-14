const express = require("express");
const router = express.Router();

const seasonsRouter = require("./seasons");
const seriesRouter = require("./series");
const moviesRouter = require("./movies");
const actorsRouter = require("./actors");
const genresRouter = require("./genres");
const apiRouter = require("./api");

router.use("/seasons", seasonsRouter);
router.use("/series", seriesRouter);
router.use("/movies", moviesRouter);
router.use("/actors", actorsRouter);
router.use("/genres", genresRouter);

// localhost:3000/api
router.use("/api", apiRouter);

router.get("/", async function (req, res) {
    res.render("index");
});

module.exports = router;
