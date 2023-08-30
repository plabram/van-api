const express = require("express")
const { 
  getAllVans, 
  getVanById, 
  createVan, 
  updateVanById,
deleteVan } = require("../controllers/vans")

const router = express.Router()
router.get("/", getAllVans)
router.get("/:id", getVanById)
router.post("/", createVan)
router.put("/:id", updateVanById)
router.delete("/:id", deleteVan)

module.exports = router