// const { designers } = require("../../utils/connectDb")
let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let designer = {...req.body}
  prisma.designers.create({data: designer})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.designers.findMany({ 
//    include: {appointments: true},
    orderBy: {lastName: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.designers.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.designers.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let designer = req.body
  prisma.designers.update({where: {id}, data: designer})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne}


