import GQLDate from '../types/gqlDate'
import { v4 as uuid } from 'uuid'

export default {
  DateTime: GQLDate,
  Query: {
    id: () => `123`
  },
  Mutation: {
    createId: () => uuid()
  },
}

