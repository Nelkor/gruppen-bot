import { connect, connection } from 'mongoose'
import { MongoDBAdapter, type ISession } from '@grammyjs/storage-mongodb'
import { Bot, session } from 'grammy'

import { token, mongoUri, launchBot, initial, GruppenBot } from '@/bot-tools'

import { setHandlers } from './handlers'

connect(mongoUri).then(() => {
  const collection = connection.db.collection<ISession>('sessions')
  const bot: GruppenBot = new Bot(token)

  bot.use(
    session({
      initial,
      storage: new MongoDBAdapter({ collection }),
    })
  )

  launchBot(bot)
  setHandlers(bot)
})
