const mongoose = require("mongoose")
const MONGO_URL = "mongodb://127.0.0.1:27017/vans"

// MongoDB
mongoose.set("strict", false)
mongoose.set("strictQuery", false)
mongoose.set("strictPopulate", false)

mongoose
// .connect(process.env.MONGO_URL)
.connect(MONGO_URL)
.then(()=>{
  console.log("Connected to MongoDB")
})
.catch((err)=>{
  console.log("Error connecting:", err)
})