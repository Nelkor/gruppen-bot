import { config } from 'dotenv'

config()

const {
  TELEGRAM_TOKEN,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PORT,
  MARIA_DATABASE,
  MARIA_USER,
  MARIA_PASSWORD,
  MARIA_PORT,
} = process.env

if (
  !TELEGRAM_TOKEN ||
  !MONGO_USER ||
  !MONGO_PASSWORD ||
  !MONGO_PORT ||
  !MARIA_DATABASE ||
  !MARIA_USER ||
  !MARIA_PASSWORD ||
  !MARIA_PORT
) {
  throw new Error('Create .env file before launching')
}

export const token = TELEGRAM_TOKEN

export const mongoUri = [
  'mongodb://',
  `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}`,
  '@localhost:',
  process.env.MONGO_PORT,
].join('')

export const mariaDatabase = MARIA_DATABASE

export const mariaUser = MARIA_USER

export const mariaPassword = MARIA_PASSWORD

export const mariaPort = parseInt(MARIA_PORT)
