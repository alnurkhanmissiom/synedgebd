import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { timestamps } from '../libs/time';

export const massagesSchema = mysqlTable('contact', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 45 }).notNull(),
  email: varchar('email', { length: 45 }).notNull().unique(),
  phone: varchar('phone', { length: 45 }).notNull(),
  company: varchar('company', { length: 45 }).notNull(),
  message: varchar('message', { length: 255 }).notNull(),
  ...timestamps,
});

export type massagesSchemaType = typeof massagesSchema.$inferSelect;
