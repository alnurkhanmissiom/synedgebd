import { relations } from 'drizzle-orm';
import {
  mysqlTable,
  varchar,
  int,
  timestamp,
  text,
  json,
} from 'drizzle-orm/mysql-core';
import { timestamps } from '../libs/time';

export const adminSchema = mysqlTable('admins', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 191 }),
  email: varchar('email', { length: 150 }).unique().notNull(),
  hash_password: varchar('hash_password', { length: 255 }),
  role_id: int('role_id')
    .notNull()
    .references(() => AdminRoleSchema.id),
  ...timestamps,
});
export const adminTokenSchema = mysqlTable('admin_tokens', {
  id: int('id').autoincrement().primaryKey(),
  token: text('token'),
  user_id: int('user_id')
    .notNull()
    .references(() => adminSchema.id),
  expires_at: timestamp('expires_at', { mode: 'string' }).notNull(),
});
export const AdminRoleSchema = mysqlTable('admin_roles', {
  id: int('id').autoincrement().primaryKey(),
  role_name: varchar('role_name', { length: 255 }).notNull(),
  permission: json('permission').$type<string[]>().notNull().default([]),
  ...timestamps,
});
export const adminRelationSchema = relations(adminSchema, ({ one }) => ({
  role: one(AdminRoleSchema, {
    fields: [adminSchema.role_id],
    references: [AdminRoleSchema.id],
  }),
}));
export const adminTokenRelationSchema = relations(
  adminTokenSchema,
  ({ one }) => ({
    user: one(adminSchema, {
      fields: [adminTokenSchema.user_id],
      references: [adminSchema.id],
    }),
  })
);

export type adminSchemaType = typeof adminSchema.$inferInsert;
export type adminTokenSchemaType = typeof adminTokenSchema.$inferInsert;
export type AdminRoleSchemaType = typeof AdminRoleSchema.$inferInsert;
