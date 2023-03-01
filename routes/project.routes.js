const express = require("express")
const projectRouter = express.Router()
const projects = require("../data/projects.json")

projectRouter.get("/", (req, res) => {
  res.json(projects)
})

projectRouter.get("/:name", (req, res) => {
  const matchedProject = projects.find(
    (project) => project.slug === req.params.name
  )
  res.json(matchedProject)
  // res.json("Hi from the backend of yo ass")
})

module.exports = projectRouter
