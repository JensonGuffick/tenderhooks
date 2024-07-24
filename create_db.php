<?php
// Open (or create) the SQLite database file
$db = new SQLite3('mydb.db');

// SQL query to create the table
$createTableQuery = 'CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
)';

// Execute the query
if ($db->exec($createTableQuery)) {
    echo "Database and table created successfully!";
} else {
    echo "Error creating table: " . $db->lastErrorMsg();
}

// Close the database connection
$db->close();
?>