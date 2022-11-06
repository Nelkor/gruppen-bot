import { GruppenBot } from '@/bot-tools'
import { queries, UserInTop } from '@/group-engine'
import { getUserName } from '@/helpers'

const placeEmojis = ['🥇', '🥈', '🥉']

export const setHandlers = (bot: GruppenBot) => {
  bot.chatType('private').command('start', ctx => {
    ctx.reply('Okay').then()
  })

  bot.chatType('group').command('rating', async ctx => {
    const top = await bot.dbQueryData<UserInTop>(queries.getTop)

    if (!top.length) {
      ctx.reply('На текущий момент рейтинг пуст').then()

      return
    }

    const lines = await Promise.all(
      top.map(async ({ telegramUserId, rating }, index) => {
        const { user } = await bot.api.getChatMember(
          ctx.chat.id,
          telegramUserId
        )

        const name = getUserName(user)

        return `${placeEmojis[index]} ${name}: ${rating}`
      })
    )

    ctx
      .reply(`*Рейтинг участников*\n\n${lines.join('\n')}`, {
        parse_mode: 'MarkdownV2',
      })
      .then()
  })

  bot.chatType('group').on('message:text', async ctx => {
    const userExists = Boolean(
      (await bot.dbQueryData(queries.checkUser, [ctx.chat.id, ctx.from.id]))
        .length
    )

    if (userExists) {
      await bot.dbQueryAction(queries.incRating, [ctx.chat.id, ctx.from.id])
    } else {
      await bot.dbQueryAction(queries.addUser, [ctx.chat.id, ctx.from.id, 1])
    }
  })
}
