import { Api } from 'grammy'

import { getUserName } from '@/helpers'

import { getGroup } from './store'

const placeEmojis = ['🥇', '🥈', '🥉']

export const getTop = async (groupId: number, api: Api) => {
  const group = Array.from(getGroup(groupId))
    .map(([id, { rating }]) => ({ id, rating }))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, placeEmojis.length)

  const users = await Promise.all(
    group.map(async ({ id, rating }, index) => {
      const { user } = await api.getChatMember(groupId, id)

      const name = getUserName(user)

      return `${placeEmojis[index]} ${name}: ${rating}`
    })
  )

  return users.length
    ? `*Рейтинг участников*\n\n${users.join('\n')}`
    : 'На текущий момент рейтинг пуст'
}
