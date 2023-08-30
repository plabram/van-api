const {Van} = require("../models/mongo")

const getAllVansFromDb = async (filter) => {
  const titleFilterOptions = {
    title: {$regex: new RegExp(filter, "i")} 
  }
  const vans = await Van.find(filter ? titleFilterOptions : {})
  return vans
}

const getVanByIdFromDb = async (id) => {
  const van = await Van.findById(id)
      return van
}

const createVanInDb = async (payload) => {
  const newVan = new Van(payload)
  await newVan.save()
  return newVan
}

const updateVanInDb = async (id, payload) => {
  const van = await Van.findByIdAndUpdate(id, payload, {new:true})
  return van
}

const deleteVanFromDb = async (id) => {
  await Van.deleteOne({_id: id})
}

module.exports = {
  getAllVansFromDb,
  getVanByIdFromDb,
  createVanInDb,
  updateVanInDb,
  deleteVanFromDb
}