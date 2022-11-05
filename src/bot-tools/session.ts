import { Context } from 'grammy'

import { SessionData } from './types'

export const initial = (): SessionData => ({
  lastMessageTime: 0,
})

export const getSessionKey = ({ from, chat }: Context) =>
  !from || !chat ? undefined : `${from.id}/${chat.id}`
