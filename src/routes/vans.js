const express = require("express")
const { getAllVans, createVan } = require("../controllers/vans")

const router = express.Router()
router.get("/", getAllVans)
router.post("/", createVan)

module.exports = router