const { now } = require("mongoose")
const {
  getAllVansFromDb, 
  getVanByIdFromDb, 
  createVanInDb,
  updateVanInDb
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
  let vanObject = {...req.body}
  vanObject.created = new Date
const newVan = await createVanInDb(vanObject)
  res.status(201).json({data: newVan})
}

const updateVanById = async (req, res) => {
  const {id} = req.params
  let dateUpdate = req.body
  dateUpdate.lastUpdated = new Date
  console.log(dateUpdate)
const van = await updateVanInDb(id, req.body)
res.status(200).json({data: van})
}

const deleteVan = async (req,res)=>{
  const {id} = req.params
    await mongo.deleteVanFromDb(id)
    res.status(200).json({data: "Van deleted"})
}

module.exports = {
  getAllVans, 
  getVanById, 
  createVan,
  updateVanById,
  deleteVan
}