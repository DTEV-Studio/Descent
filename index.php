<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/index.css">

</head>
<body>
    <?php 
    session_start();
    if(isset($_SESSION["username"])){ header("Location: login/mainscreen.php"); };
    ?>

    <div class="index_body">
        <button><a href="login/login.php">Login</a></button>
        <button><a href="login/registrate.php">Registrate</a></button>
    </div>
</body>
</html>