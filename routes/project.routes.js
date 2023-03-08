const express = require("express")
const projectRouter = express.Router()
const projects = require("../data/projects.json")
const slugify = require("slugify")

projectRouter.get("/", (req, res) => {
  res.json(projects)
})

projectRouter.get("/:title", (req, res) => {
  const matchedProject = projects.find(
    (project) => project.slug === req.params.title
  )
  res.json(matchedProject)
  // res.json("Hi from the backend of yo ass")
})

projectRouter.get("/by-owner/:owner", (req, res) => {
  const matchedProjects = projects.filter((project) => {
    const found = project.owners.find((owner) => slugify(owner.toLowerCase()) === req.params.owner.toLowerCase())

    if (found){
      return project
    }

  })

  res.json(matchedProjects)
})

module.exports = projectRouter
