<?php
session_start();
require "../conn/conn.php";

$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
try {
    $insert_user = $conn->prepare("INSERT INTO users (username,password) values (:username, :password)");
    $insert_user->bindParam(":username", $_POST['username']);
    $insert_user->bindParam(":password", $password );
    $insert_user->execute();
}catch (PDOException $error){
    echo $error->getMessage();
}

header("location: ../index.php");