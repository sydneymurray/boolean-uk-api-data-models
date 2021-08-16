// const router = require("express").Router()
const express = require("express")  
const modelRouter = express.Router()

const modelController = require("./controllers")

console.log("Router")

modelRouter.post("/", modelController.createOne)
modelRouter.get("/", modelController.retrieveAll)
modelRouter.get("/:id", modelController.retrieveOne)
modelRouter.delete("/:id", modelController.deleteOne)
modelRouter.patch("/:id", modelController.updateOne)

module.exports = modelRouter


