// const router = require("express").Router()
const express = require("express")  
const guestRouter = express.Router()

const guestController = require("./controllers")

console.log("Router")

guestRouter.post("/", guestController.createOne)
guestRouter.get("/", guestController.retrieveAll)
guestRouter.get("/:id", guestController.retrieveOne)
guestRouter.delete("/:id", guestController.deleteOne)
guestRouter.patch("/:id", guestController.updateOne)

module.exports = guestRouter


