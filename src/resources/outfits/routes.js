// const router = require("express").Router()
const express = require("express")  
const outfitRouter = express.Router()

const outfitController = require("./controllers")

console.log("Router")

outfitRouter.post("/", outfitController.createOne)
outfitRouter.get("/", outfitController.retrieveAll)
outfitRouter.get("/:id", outfitController.retrieveOne)
outfitRouter.delete("/:id", outfitController.deleteOne)
outfitRouter.patch("/:id", outfitController.updateOne)

module.exports = outfitRouter


