const mongoose = require("mongoose")

// const emptySchema = new mongoose.Schema({})

// const Van = mongoose.model("Van", emptySchema)

const vanSchema = new mongoose.Schema({
    title: String,
    model: String,
    description: String,
    price: Number,
    sleeps: Number,
    attributes: [String],
    drive: String,
    insured: Boolean,
    created: Date,
    lastUpdated: {type: Date, default: Date.now}
})

const Van = mongoose.model("Van", vanSchema)

module.exports = {
  Van
}