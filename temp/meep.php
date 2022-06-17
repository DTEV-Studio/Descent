als ingelogd is laat naam zien
<?php
if(isset($_SESSION["username"])){echo "logged in as: ",$_SESSION['username'];}else{echo "niet ingelogd";};
?>

wegstuurcode
<?php 
session_start();
if(isset($_SESSION["username"])){ header("Location: mainscreen.php"); };
?>