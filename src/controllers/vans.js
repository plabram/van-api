const {
  getAllVansFromDb, 
  getVanByIdFromDb, 
  createVanInDb
} = require("../repositories/vans")

const getAllVans = async (req,res)=> {
  const {filter} = req.query
  const vans = await getAllVansFromDb(filter)
  res.status(200).json({data: vans})
}

const getVanById = async (req,res) => {
  const {id} = req.params
      const van = await getVanByIdFromDb(id)
      res.status(200).json({data: van})
}

const createVan = async (req, res) => {
const newVan = await createVanInDb({...req.body})
  res.status(201).json({data: newVan})
}

module.exports = {
  getAllVans, 
  getVanById, 
  createVan
}