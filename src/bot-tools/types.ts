import { Bot, Context, SessionFlavor } from 'grammy'

export interface SessionData {
  pizzaCount: number
}

type GruppenContext = Context & SessionFlavor<SessionData>

export type GruppenBot = Bot<GruppenContext>
