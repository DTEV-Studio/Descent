<?php session_start() ?>
<?php // $login = $_SESSION ["username"]; if(!$login){ header("Location: index.php"); }; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="../css/mainscreen.css" rel="stylesheet">
</head>
<body class="index_background">
    <?php require_once "../require_once/header.php"; ?>
    <div class="button">
    <button><a href="../game_area's/game.html">Begin your adventure!!</a></button>
    </div>
</body>
</html>