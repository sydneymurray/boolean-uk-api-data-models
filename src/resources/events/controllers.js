// const { events } = require("../../utils/connectDb")
let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let event = {...req.body, date: new Date(req.body.date)}
  prisma.events.create({data: event})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.events.findMany({ 
//    include: {appointments: true},
    orderBy: {date: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.events.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.events.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let event = {...req.body, date: new Date(req.body.date)}
  prisma.events.update({where: {id}, data: event})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveEventModels(req, res){
  let eventName = req.params.eventName
  prisma.events.findMany({
    include: {Outfit: {include: {Models: {select: {firstName: true, lastName: true}}}}},
    where: {name: eventName}})
    .then(dbResponse => res.json(dbResponse[0].Outfit[0].Models))
}

function retrieveEventDesigners(req, res){
  let eventName = req.params.eventName
  prisma.events.findMany({
    include: {Outfit: {include: {Designers: {select: {firstName: true, lastName: true}}}}},
    where: {name: eventName}})
    .then(dbResponse => res.json(dbResponse[0].Outfit[0].Designers))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne, retrieveEventModels, 
  retrieveEventDesigners}


/*
function retrieveEventModels(req, res){
  let eventName = req.params.eventName
  prisma.events.findMany({
    where: {name: eventName}})
    .then(dbResponse => {
      eventID = dbResponse[0].id
      prisma.outfit.findMany({ 
        include: {Models: true},
        where:{modelsID: eventID},
        orderBy: {lastName: "asc"}})
        .then(dbResponse => res.json(dbResponse))
    })
}

*/