const mongoose = require("mongoose")

const emptySchema = new mongoose.Schema({})

const Van = mongoose.model("Van", emptySchema)

module.exports = {
  Van
}