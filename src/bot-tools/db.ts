import { createPool } from 'mysql2/promise'

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
