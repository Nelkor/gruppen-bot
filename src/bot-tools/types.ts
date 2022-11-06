import { Bot, Context, SessionFlavor } from 'grammy'
import { ResultSetHeader } from 'mysql2/promise'

export interface SessionData {
  lastMessageTime: number
}

export type GruppenContext = Context & SessionFlavor<SessionData>

type QueryData = <T>(sql: string, values?: (string | number)[]) => Promise<T[]>

type QueryAction = (
  sql: string,
  values?: (string | number)[]
) => Promise<ResultSetHeader>

export interface GruppenBot extends Bot<GruppenContext> {
  dbQueryData: QueryData
  dbQueryAction: QueryAction
}
