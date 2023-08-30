const express = require("express")
const vanRouter = require("./vans")

const router = express.Router()

router.use("/vans", vanRouter)

module.exports = router


