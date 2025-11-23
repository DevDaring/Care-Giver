// Database schema definitions

export const CREATE_USERS_TABLE = `
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('USER', 'ADMIN')),
    language TEXT NOT NULL DEFAULT 'en',
    pin TEXT,
    password TEXT,
    phone_number TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`;

export const CREATE_CONTACTS_TABLE = `
  CREATE TABLE IF NOT EXISTS contacts (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    relationship TEXT,
    is_emergency INTEGER DEFAULT 0,
    photo_uri TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`;

export const CREATE_ALARMS_TABLE = `
  CREATE TABLE IF NOT EXISTS alarms (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    type TEXT NOT NULL CHECK(type IN ('TIME', 'LOCATION', 'PERSON')),
    title TEXT NOT NULL,
    description TEXT,
    is_active INTEGER DEFAULT 1,
    is_recurring INTEGER DEFAULT 0,
    time TEXT,
    repeat_days TEXT,
    latitude REAL,
    longitude REAL,
    radius REAL,
    place_name TEXT,
    person_name TEXT,
    person_id TEXT,
    trigger_time TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    last_triggered TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`;

export const CREATE_CHAT_MESSAGES_TABLE = `
  CREATE TABLE IF NOT EXISTS chat_messages (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('user', 'assistant')),
    content TEXT NOT NULL,
    image_uri TEXT,
    timestamp TEXT NOT NULL DEFAULT (datetime('now')),
    language TEXT,
    was_voice_input INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`;

export const CREATE_STORIES_TABLE = `
  CREATE TABLE IF NOT EXISTS stories (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image_uri TEXT,
    language TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`;

export const CREATE_ADMIN_RESTRICTIONS_TABLE = `
  CREATE TABLE IF NOT EXISTS admin_restrictions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    feature_name TEXT NOT NULL,
    is_blocked INTEGER DEFAULT 0,
    time_start TEXT,
    time_end TEXT,
    usage_limit INTEGER,
    current_usage INTEGER DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id, feature_name)
  );
`;

export const CREATE_ACTIVITY_LOGS_TABLE = `
  CREATE TABLE IF NOT EXISTS activity_logs (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    action TEXT NOT NULL,
    details TEXT,
    timestamp TEXT NOT NULL DEFAULT (datetime('now')),
    latitude REAL,
    longitude REAL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`;

export const CREATE_SETTINGS_TABLE = `
  CREATE TABLE IF NOT EXISTS settings (
    user_id TEXT PRIMARY KEY,
    language TEXT NOT NULL DEFAULT 'en',
    voice_enabled INTEGER DEFAULT 1,
    tts_enabled INTEGER DEFAULT 1,
    notifications_enabled INTEGER DEFAULT 1,
    location_tracking_enabled INTEGER DEFAULT 0,
    emergency_mode INTEGER DEFAULT 0,
    theme TEXT DEFAULT 'light',
    font_size TEXT DEFAULT 'medium',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`;

export const CREATE_GEOFENCES_TABLE = `
  CREATE TABLE IF NOT EXISTS geofences (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    radius REAL NOT NULL,
    is_active INTEGER DEFAULT 1,
    notify_on_enter INTEGER DEFAULT 1,
    notify_on_exit INTEGER DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`;

// Indexes for better query performance
export const CREATE_INDEXES = [
  'CREATE INDEX IF NOT EXISTS idx_contacts_user_id ON contacts(user_id);',
  'CREATE INDEX IF NOT EXISTS idx_alarms_user_id ON alarms(user_id);',
  'CREATE INDEX IF NOT EXISTS idx_alarms_type ON alarms(type);',
  'CREATE INDEX IF NOT EXISTS idx_chat_messages_user_id ON chat_messages(user_id);',
  'CREATE INDEX IF NOT EXISTS idx_stories_user_id ON stories(user_id);',
  'CREATE INDEX IF NOT EXISTS idx_activity_logs_user_id ON activity_logs(user_id);',
  'CREATE INDEX IF NOT EXISTS idx_geofences_user_id ON geofences(user_id);',
];

export const ALL_TABLES = [
  CREATE_USERS_TABLE,
  CREATE_CONTACTS_TABLE,
  CREATE_ALARMS_TABLE,
  CREATE_CHAT_MESSAGES_TABLE,
  CREATE_STORIES_TABLE,
  CREATE_ADMIN_RESTRICTIONS_TABLE,
  CREATE_ACTIVITY_LOGS_TABLE,
  CREATE_SETTINGS_TABLE,
  CREATE_GEOFENCES_TABLE,
  ...CREATE_INDEXES,
];
