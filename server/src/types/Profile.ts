import { APP_SECRET, getUserId } from '../utils'
import {objectType, inputObjectType,} from 'nexus'
import { Context } from '../context'

export const Profile = objectType({
    name: 'Profile',
    definition(t) {
      t.int('id')
      t.field('createdAt', { type: 'DateTime' })
      t.field('updatedAt', { type: 'DateTime' })
      t.string('bio')
      t.string('location')
      t.string('website')
    },
  })

