const mongoose = require("mongoose")

// MongoDB
mongoose.set("strict", false)
mongoose.set("strictQuery", false)
mongoose.set("strictPopulate", false)

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("Connected to MongoDB")
})
.catch((err)=>{
  console.log("Error connecting:", err)
})