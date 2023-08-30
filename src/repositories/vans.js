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

module.exports = {
  getAllVansFromDb,
  getVanByIdFromDb,
  createVanInDb
}