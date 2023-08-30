require("dotenv").config() 
const express = require('express')
const mainRouter = require("./routes") // automatically imports index
require("./config/db")
const app = express()

app.use("/api", mainRouter)

const PORT = 4001
app.listen(PORT, ()=>{
  console.log(`App running in: http://localhost:${PORT}`)
}) 