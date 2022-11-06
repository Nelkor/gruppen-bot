import { connect, connection } from 'mongoose'
import { MongoDBAdapter, type ISession } from '@grammyjs/storage-mongodb'
import { Bot, session } from 'grammy'

import {
  token,
  mongoUri,
  connectDb,
  spamControl,
  launchBot,
  initial,
  getSessionKey,
  GruppenBot,
} from '@/bot-tools'

import { setHandlers } from './handlers'

Promise.all([connectDb(), connect(mongoUri)]).then(([db]) => {
  const collection = connection.db.collection<ISession>('sessions')
  const storage = new MongoDBAdapter({ collection })
  const bot = new Bot(token) as GruppenBot

  bot.db = db
  bot.use(session({ initial, getSessionKey, storage }))
  bot.use(spamControl)

  setHandlers(bot)
  launchBot(bot)
})
