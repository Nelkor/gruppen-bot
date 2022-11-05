import { NextFunction } from 'grammy'

import { GruppenContext } from './types'

export const PASS_DELAY = 1000

export const spamControl = (ctx: GruppenContext, next: NextFunction) => {
  const now = Date.now()
  const timeFromLastMessage = now - ctx.session.lastMessageTime

  ctx.session.lastMessageTime = now

  if (timeFromLastMessage > PASS_DELAY) {
    next().then()
  }
}
