// const router = require("express").Router()
const express = require("express")  
const designerRouter = express.Router()

const designerController = require("./controllers")

console.log("Router")

designerRouter.post("/", designerController.createOne)
designerRouter.get("/", designerController.retrieveAll)
designerRouter.get("/:id", designerController.retrieveOne)
designerRouter.delete("/:id", designerController.deleteOne)
designerRouter.patch("/:id", designerController.updateOne)

module.exports = designerRouter


