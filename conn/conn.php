<?php

$servername = "localhost";
$dbname = "db-game";
$username = "root";
$password = "";

try {
    $conn = new pdo("mysql:host=$servername;dbname=$dbname", $username, $password);
} catch (PDOException $e) {
    echo "connectie mislukt: " . $e->getMessage();
}
