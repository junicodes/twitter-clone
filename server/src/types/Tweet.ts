import { APP_SECRET, getUserId } from '../utils'
import {objectType, inputObjectType,} from 'nexus'
import { Context } from '../context'

export const Tweet = objectType({
    name: 'Tweet',
    definition(t) {
      t.nonNull.int('id')
      t.nonNull.field('createdAt', { type: 'DateTime' })
      t.nonNull.field('updatedAt', { type: 'DateTime' })
      t.nonNull.string('title')
      t.nonNull.string('content')
      t.nonNull.boolean('published')
      t.nonNull.int('viewCount')
    },
  })
