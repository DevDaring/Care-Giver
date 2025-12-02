// MOCK Database for prototype - uses in-memory storage
// Replace with real SQLite when native modules work

console.log('[Database] Using in-memory mock database for prototype');

// In-memory storage
const storage: Record<string, any[]> = {
  users: [],
  contacts: [],
  alarms: [],
  chat_messages: [],
  stories: [],
  admin_restrictions: [],
  activity_logs: [],
  settings: [],
  geofences: [],
};

// Mock database instance
const mockDb = {
  executeSql: async (sql: string, params?: any[]) => {
    console.log('[MockDB] SQL:', sql.substring(0, 50) + '...');
    return [{ rows: { length: 0, item: () => null, raw: () => [] } }];
  },
  close: async () => {
    console.log('[MockDB] Database closed');
  },
};

let databaseInstance: typeof mockDb | null = null;

/**
 * Initialize mock database
 */
export const initDatabase = async () => {
  if (databaseInstance) {
    return databaseInstance;
  }

  console.log('[MockDB] Initializing mock database...');
  
  // Initialize with default data if needed
  if (storage.users.length === 0) {
    storage.users.push({
      id: 'default-user',
      name: 'User',
      role: 'USER',
      language: 'en',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  }

  databaseInstance = mockDb;
  console.log('[MockDB] Mock database initialized successfully');
  return databaseInstance;
};

/**
 * Get database instance
 */
export const getDatabase = async () => {
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
    databaseInstance = null;
    console.log('[MockDB] Database closed');
  }
};

/**
 * Drop all tables (clears storage)
 */
export const dropAllTables = async (): Promise<void> => {
  Object.keys(storage).forEach(key => {
    storage[key] = [];
  });
  console.log('[MockDB] All tables cleared');
};

/**
 * Reset database
 */
export const resetDatabase = async (): Promise<void> => {
  await dropAllTables();
  await closeDatabase();
  await initDatabase();
  console.log('[MockDB] Database reset');
};

// Simple CRUD helpers for prototype
export const mockStorage = {
  getAll: (table: string) => storage[table] || [],
  getById: (table: string, id: string) => storage[table]?.find((item: any) => item.id === id),
  insert: (table: string, item: any) => {
    if (!storage[table]) storage[table] = [];
    storage[table].push(item);
    return item;
  },
  update: (table: string, id: string, updates: any) => {
    const index = storage[table]?.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      storage[table][index] = { ...storage[table][index], ...updates };
      return storage[table][index];
    }
    return null;
  },
  delete: (table: string, id: string) => {
    const index = storage[table]?.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      storage[table].splice(index, 1);
      return true;
    }
    return false;
  },
};

export default {
  initDatabase,
  getDatabase,
  closeDatabase,
  dropAllTables,
  resetDatabase,
  mockStorage,
};
