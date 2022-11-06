import { createConnection } from 'mysql2/promise'

import {
  mariaDatabase,
  mariaUser,
  mariaPassword,
  mariaPort,
} from './environment'

export const connectDb = () =>
  createConnection({
    database: mariaDatabase,
    user: mariaUser,
    password: mariaPassword,
    port: mariaPort,
  })
