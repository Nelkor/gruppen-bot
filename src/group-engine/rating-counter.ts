import { GruppenBot } from '@/bot-tools'

import checkUserSql from './queries/check-user.sql'
import incRatingSql from './queries/inc-rating.sql'
import addUserSql from './queries/add-user.sql'

export const incrementRating = (
  chatId: number,
  userId: number,
  bot: GruppenBot
) => {
  const values = [chatId, userId]

  bot.dbQueryData(checkUserSql, values).then(({ length }) => {
    if (!length) {
      values.push(1)
    }

    const sql = length ? incRatingSql : addUserSql

    bot.dbQueryAction(sql, values).then()
  })
}
