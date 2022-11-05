import { GruppenBot } from '@/bot-tools'
import { incrementRatingOfUser, getTop } from '@/group-engine'

export const setHandlers = (bot: GruppenBot) => {
  bot.chatType('private').command('start', ctx => {
    ctx.reply(`Привет x${++ctx.session.pizzaCount}`).then()
  })

  bot.chatType('group').command('rating', async ctx => {
    const text = await getTop(ctx.chat.id, bot.api)

    ctx
      .reply(text, {
        parse_mode: 'MarkdownV2',
      })
      .then()
  })

  bot.chatType('group').on('message:text', ctx => {
    incrementRatingOfUser(ctx.chat.id, ctx.from.id)
  })
}