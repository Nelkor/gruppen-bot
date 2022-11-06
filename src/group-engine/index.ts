import checkUser from './queries/check-user.sql'
import addUser from './queries/add-user.sql'
import incRating from './queries/inc-rating.sql'
import getTop from './queries/get-top.sql'

export type { UserInTop } from './types'

export const queries = {
  checkUser,
  addUser,
  incRating,
  getTop,
}
