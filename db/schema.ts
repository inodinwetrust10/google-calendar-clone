import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const eventsTable = sqliteTable('events', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  date: integer('date', { mode: 'timestamp' }).notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
});