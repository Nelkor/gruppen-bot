import { Bot, Context, SessionFlavor } from 'grammy'
import { Pool } from 'mysql2/promise'

export interface SessionData {
  lastMessageTime: number
}

export type GruppenContext = Context & SessionFlavor<SessionData>

export interface GruppenBot extends Bot<GruppenContext> {
  db: Pool
}
