import { User } from '@grammyjs/types'

export const getUserName = ({ username, first_name, last_name }: User) =>
  username ? `@${username}` : [first_name, last_name].filter(Boolean).join(' ')
