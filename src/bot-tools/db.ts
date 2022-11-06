import { createPool, Pool, ResultSetHeader } from 'mysql2/promise'

import {
  mariaDatabase,
  mariaUser,
  mariaPassword,
  mariaPort,
} from './environment'

export const connectDb = () =>
  createPool({
    connectionLimit: 2,
    database: mariaDatabase,
    user: mariaUser,
    password: mariaPassword,
    port: mariaPort,
  })

export const createQueryData =
  (pool: Pool) =>
  async <T>(sql: string, values: (string | number)[] = []): Promise<T[]> => {
    const [rows] = await pool.query(sql, values)

    return (Array.isArray(rows) ? rows : []) as T[]
  }

export const createQueryAction =
  (pool: Pool) =>
  async (
    sql: string,
    values: (string | number)[] = []
  ): Promise<ResultSetHeader> => {
    const [result] = await pool.query(sql, values)

    return result as ResultSetHeader
  }
