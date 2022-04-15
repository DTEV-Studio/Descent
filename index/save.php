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

$username = $_POST["username"];
$lvl = $_POST["form_lvl"];
$xp = $_POST["form_xp"];
$dmg = $_POST["form_dmg"];
$ecr =  $_POST["form_ecrd"];

$insert_user = $conn->prepare("UPDATE users SET lvl = :lvl, 
                                                xp = :xp, 
                                                dmg = :dmg,  
                                                ecr = :ecr
                                            WHERE username = :username");
$insert_user->execute([
    "username"   => $username,
    "lvl"        => $lvl,
    "xp"         => $xp,
    "dmg"        => $dmg,
    "ecr"        => $ecr
]);

header("Location: ../game_area's/game.html");