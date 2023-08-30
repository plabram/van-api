const express = require("express")
const { getAllVans, getVanById, createVan } = require("../controllers/vans")

const router = express.Router()
router.get("/", getAllVans)
router.get("/:id", getVanById)
router.post("/", createVan)

module.exports = router