const {Van} = require("../models/mongo")


const getAllVansFromDb = async (filter) => {
  const nameFilterOptions = {
    name: {$regex: new RegExp(filter, "i")} 
  }

  const vans = await Van.find(filter ? nameFilterOptions : {})
  
  return vans
}

const getAllVans = async (req,res)=> {
  const {filter} = req.query
  const vans = await getAllVansFromDb(filter)
  res.status(200).json({data: vans})
}

const createVanInDb = async (payload) => {
  const newVan = new Van(payload)
  await newVan.save()

  return newVan
}

const createVan = async (req, res) => {
  const newVan = await createVanInDb({
    name: "hello" //req.body.name
})
res.status(201).json({data: newVan})
}



module.exports = {getAllVans, createVan}