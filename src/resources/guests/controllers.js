// const { guests } = require("../../utils/connectDb")
let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let guest = {...req.body}
  prisma.guests.create({data: guest})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.guests.findMany({ 
//    include: {appointments: true},
    orderBy: {lastName: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.guests.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.guests.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let guest = req.body
  prisma.guests.update({where: {id}, data: guest})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne}


