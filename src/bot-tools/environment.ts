import { config } from 'dotenv'

config()

if (!process.env.TELEGRAM_TOKEN) {
  throw new Error('Create .env file before launching')
}

export const token = process.env.TELEGRAM_TOKEN

export const mongoUri = [
  'mongodb://',
  `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}`,
  '@localhost:',
  process.env.MONGO_PORT,
].join('')
