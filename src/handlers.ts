import { GruppenBot } from '@/bot-tools'

export const setHandlers = (bot: GruppenBot) => {
  bot.command('start', ctx => {
    const number = ++ctx.session.pizzaCount

    ctx.reply(`Привет x${number}`).then()
  })
}
