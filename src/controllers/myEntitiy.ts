// import Prisma from '@prisma/client'
import { PrismaClient/*, Prisma*/ } from ".prisma/client";

const prisma = new PrismaClient()

function get () {
  return Promise.resolve({})
}

function create (myEntitiy) {
  return Promise.resolve({})
}

async function update (id: number, myEntitiy) {
  return Promise.resolve({})
}

async function del (id: number) {
  return Promise.resolve({})
}

export default {
  get,
  create,
  del,
  update,
}
