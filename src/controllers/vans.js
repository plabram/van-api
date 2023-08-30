const {Van} = require("../models/mongo")


const getAllVansFromDb = async (filter) => {
  const titleFilterOptions = {
    title: {$regex: new RegExp(filter, "i")} 
  }
  const vans = await Van.find(filter ? titleFilterOptions : {})
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
//  const {title, model, description, price, attributes, drive, insured} = req.body
  // const newVan = await createVanInDb({title, model, description, price, attributes, drive, insured})
  const newVan = await createVanInDb({...req.body})
  res.status(201).json({data: newVan})
}



module.exports = {getAllVans, createVan}