<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="../css/index.css" rel="stylesheet">
    <link href="../css/mainscreen.css" rel="stylesheet">
    
</head>
<body class="index_background">
    <?php 
    session_start();
    if(!isset($_SESSION["username"])){ header("Location: ../index.php"); };
    ?>

    <button><a href="../game/game.html">    new game        </a></button>
    <button><a href="#">                    load game (WIP) </a></button>
    <button><a href="log_out.php">          log_out                 </a></button>

</body>
</html>