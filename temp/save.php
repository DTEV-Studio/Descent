<?php
$resultaat = $_GET['resultaat'];
//create a PDO connection with try and catch
try {
    $db = new PDO("mysql:host=localhost;dbname=spel", "root", "");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Failed to connect to the database: " . $e->getMessage();
}
//insert resultaat into highscore table with prepared statements
$stmt = $db->prepare("INSERT INTO highscore (resultaat) VALUES (:resultaat)");
$stmt->bindParam(':resultaat', $resultaat);
$stmt->execute();
