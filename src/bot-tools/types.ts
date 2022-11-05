import { Bot, Context, SessionFlavor } from 'grammy'

export interface SessionData {
  lastMessageTime: number
}

export type GruppenContext = Context & SessionFlavor<SessionData>

export type GruppenBot = Bot<GruppenContext>
