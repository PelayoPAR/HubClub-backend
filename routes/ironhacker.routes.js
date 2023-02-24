const express = require("express")
const ironhackerRouter = express.Router()
const ironhackers = require("../data/ironhackers.json")

ironhackerRouter.get("/", (req, res) => {
res.json(ironhackers)
})

module.exports = ironhackerRouter