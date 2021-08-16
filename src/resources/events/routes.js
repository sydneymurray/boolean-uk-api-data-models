// const router = require("express").Router()
const express = require("express")  
const eventRouter = express.Router()

const eventController = require("./controllers")

console.log("Router")

eventRouter.post("/", eventController.createOne)
eventRouter.get("/", eventController.retrieveAll)
eventRouter.get("/:id", eventController.retrieveOne)
eventRouter.get("/:eventName/models", eventController.retrieveEventModels)
eventRouter.get("/:eventName/designers", eventController.retrieveEventDesigners)
eventRouter.delete("/:id", eventController.deleteOne)
eventRouter.patch("/:id", eventController.updateOne)

module.exports = eventRouter


