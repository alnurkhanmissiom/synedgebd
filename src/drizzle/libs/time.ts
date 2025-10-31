import { timestamp } from 'drizzle-orm/mysql-core';

export const timestamps = {
  created_at: timestamp('created_at', { mode: 'string' })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .defaultNow()
    .onUpdateNow()
    .notNull(),
};

export const deleted_at = timestamp('deleted_at', { mode: 'string' });
