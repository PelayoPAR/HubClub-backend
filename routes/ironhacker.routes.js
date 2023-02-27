const express = require("express")
const ironhackerRouter = express.Router()
const ironhackers = require("../data/ironhackers.json")

ironhackerRouter.get("/", (req, res) => {
  res.json(ironhackers)
})

ironhackerRouter.get("/:name", (req, res) => {
  const matchedIronhacker = ironhackers.find(
    (ironhacker) => ironhacker.slug === req.params.name
  )
  res.json(matchedIronhacker)
})

module.exports = ironhackerRouter
