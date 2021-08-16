// const { models } = require("../../utils/connectDb")
let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let model = {...req.body}
  prisma.models.create({data: model})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.models.findMany({ 
//    include: {appointments: true},
    orderBy: {lastName: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.models.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.models.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let model = req.body
  prisma.models.update({where: {id}, data: model})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne}


