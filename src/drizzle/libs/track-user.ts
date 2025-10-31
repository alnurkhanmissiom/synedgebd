import { int } from 'drizzle-orm/mysql-core';

export const trackUser = {
  created_by: int('created_by'),
  updated_by: int('updated_by'),
};
