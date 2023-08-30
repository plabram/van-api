const express = require("express")
const { 
  getAllVans, 
  getVanById, 
  createVan, 
  updateVanById } = require("../controllers/vans")

const router = express.Router()
router.get("/", getAllVans)
router.get("/:id", getVanById)
router.post("/", createVan)
router.put("/:id", updateVanById)

module.exports = router