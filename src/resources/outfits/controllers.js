// const { outfits } = require("../../utils/connectDb")
let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let outfit = {...req.body}
  prisma.outfit.create({data: outfit})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.outfit.findMany({ 
//    include: {appointments: true},
    orderBy: {name: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.outfit.findUnique({
    include: {Designers: true, Models: true, Events: true, Guests: true}, 
    where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.outfit.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let outfit = req.body
  prisma.outfit.update({where: {id}, data: outfit})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne}


