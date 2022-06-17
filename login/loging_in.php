<?php
session_start();
require_once "../conn/conn.php";

//get_user
$get_user = $conn->prepare("SELECT * FROM users WHERE username = :username");
$get_user->bindParam(":username", $_POST['username']);
$get_user->execute();
$user = $get_user->fetchAll();

$password = $_POST['password'];

//de-hash
foreach($user as $data){
    $user_naam = $data["username"];
    $hash = $data["password"];
}

//controle
if (password_verify($password, $hash)) {
    $_SESSION["logged_in"] = true;
    $_SESSION["username"] = $_POST['username'];
    header("Location: mainscreen.php");
} else {
    echo 'Invalid password.';
}
