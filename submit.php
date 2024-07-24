<?php

$db = new SQLite3('mydb.db');

if (!$db) {
    die("Error connecting to database.");
}

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';

if (!$name || !$email) {
    die("Name and email are required.");
}

$stmt = $db->prepare('INSERT INTO subscribers (name, email) VALUES (:name, :email)');

if (!$stmt) {
    die("Error preparing statement.");
}

$stmt->bindValue(':name', $name);
$stmt->bindValue(':email', $email);

$result = $stmt->execute();

if (!$result) {
    die("Error executing statement.");
}

$db->close();

exit();

?>
