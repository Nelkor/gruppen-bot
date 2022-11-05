import { connect, connection } from 'mongoose'
import { MongoDBAdapter, type ISession } from '@grammyjs/storage-mongodb'
import { Bot, session } from 'grammy'

import {
  token,
  mongoUri,
  spamControl,
  launchBot,
  initial,
  getSessionKey,
  GruppenBot,
} from '@/bot-tools'

import { setHandlers } from './handlers'

connect(mongoUri).then(() => {
  const collection = connection.db.collection<ISession>('sessions')
  const storage = new MongoDBAdapter({ collection })
  const bot: GruppenBot = new Bot(token)

  bot.use(session({ initial, getSessionKey, storage }))
  bot.use(spamControl)

  setHandlers(bot)
  launchBot(bot)
})
