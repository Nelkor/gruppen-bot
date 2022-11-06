import { GruppenBot } from '@/bot-tools'
import { incrementRating, getTop } from '@/group-engine'

export const setHandlers = (bot: GruppenBot) => {
  bot.chatType('private').command('start', ctx => {
    ctx.reply('Okay').then()
  })

  bot.chatType('group').command('rating', async ctx => {
    const text = await getTop(ctx.chat.id, bot)

    ctx
      .reply(text, {
        parse_mode: 'MarkdownV2',
      })
      .then()
  })

  bot.chatType('group').on('message:text', ctx => {
    incrementRating(ctx.chat.id, ctx.from.id, bot)
  })
}
