// Database initialization and management

import SQLite from 'react-native-sqlite-storage';
import {DATABASE} from '@/config/constants';
import {ALL_TABLES} from './schema';

// Enable debugging in development
SQLite.DEBUG(__DEV__);
SQLite.enablePromise(true);

let databaseInstance: SQLite.SQLiteDatabase | null = null;

/**
 * Initialize and open database connection
 */
export const initDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if (databaseInstance) {
    return databaseInstance;
  }

  try {
    console.log('Initializing database...');
    const db = await SQLite.openDatabase({
      name: DATABASE.name,
      location: DATABASE.location,
    });

    console.log('Database opened successfully');

    // Create all tables
    for (const tableSQL of ALL_TABLES) {
      await db.executeSql(tableSQL);
    }

    console.log('All tables created successfully');

    databaseInstance = db;
    return db;
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

/**
 * Get database instance
 */
export const getDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if (!databaseInstance) {
    return await initDatabase();
  }
  return databaseInstance;
};

/**
 * Close database connection
 */
export const closeDatabase = async (): Promise<void> => {
  if (databaseInstance) {
    await databaseInstance.close();
    databaseInstance = null;
    console.log('Database closed successfully');
  }
};

/**
 * Drop all tables (use with caution, for development only)
 */
export const dropAllTables = async (): Promise<void> => {
  const db = await getDatabase();
  const tables = [
    'users',
    'contacts',
    'alarms',
    'chat_messages',
    'stories',
    'admin_restrictions',
    'activity_logs',
    'settings',
    'geofences',
  ];

  for (const table of tables) {
    await db.executeSql(`DROP TABLE IF EXISTS ${table};`);
  }

  console.log('All tables dropped');
};

/**
 * Reset database (drop and recreate)
 */
export const resetDatabase = async (): Promise<void> => {
  await dropAllTables();
  await closeDatabase();
  await initDatabase();
  console.log('Database reset successfully');
};

export default {
  initDatabase,
  getDatabase,
  closeDatabase,
  dropAllTables,
  resetDatabase,
};
