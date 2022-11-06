import { GruppenBot } from '@/bot-tools'
import { getUserName } from '@/helpers'

import getTopSql from './queries/get-top.sql'
import { UserInTop } from './types'

const placeEmojis = ['🥇', '🥈', '🥉']

export const getTop = async (groupId: number, bot: GruppenBot) => {
  const top = await bot.dbQueryData<UserInTop>(getTopSql)

  if (!top) {
    return 'На текущий момент рейтинг пуст' as string
  }

  const lines = await Promise.all(
    top.map(async ({ telegramUserId, rating }, index) => {
      const { user } = await bot.api.getChatMember(groupId, telegramUserId)

      const name = getUserName(user)

      return `${placeEmojis[index]} ${name}: ${rating}`
    })
  )

  return `*Рейтинг участников*\n\n${lines.join('\n')}`
}
