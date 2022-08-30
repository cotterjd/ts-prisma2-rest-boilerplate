import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

function get () {
  return Promise.resolve({})
  // return prisma.myEntity.findMany()  
}

function create (data) {
  return Promise.resolve({})
  // return prisma.myEntity.create({
  //   data, 
  // })
}

async function update (id: number, data) {
  return Promise.resolve({})
  // const updateRes = await prisma.myEntity.update({
  //   where: { id: Number(id) },
  //   data,
  // })
  // if (updateRes.id) { // May be a way to do with with the update
  //   return prisma.myEntity.findUnique({
  //     where: { id: updateRes.id },
  //   })
  // }
}

async function del (id: number) {
  return Promise.resolve({})
  // const devToDelete = await prisma.myEntity.findUnique({ where: { id }})
  // if (!devToDelete) return Promise.reject(`myEntity not found`)

  // return prisma.myEntity.delete({ where: { id }})
}

export default {
  get,
  create,
  del,
  update,
}
