import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema/index';
import env from '../config/env';

config();

const pool = mysql.createPool({
  uri: env.DATABASE_URL,
});
export const db = drizzle(pool, {
  schema: schema,
  // logger: env.NODE_ENV === 'production' ? false : true,
  mode: 'planetscale',
});
