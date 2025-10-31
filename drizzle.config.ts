import { config } from 'dotenv';
import env from './src/config/env';
import { defineConfig } from 'drizzle-kit';

config();

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema',
  dialect: 'mysql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
