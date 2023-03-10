const express = require("express")

const app = express()

require("./config")(app)

const indexRoutes = require("./routes/index.routes")
app.use("/", indexRoutes)

const ironhackerRoutes = require("./routes/ironhacker.routes")
app.use("/ironhackers", ironhackerRoutes)

const projectRoutes = require("./routes/project.routes")
app.use("/projects", projectRoutes)

module.exports = app
