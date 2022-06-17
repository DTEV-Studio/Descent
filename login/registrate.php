<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="../css/index.css" rel="stylesheet">

</head>
<body>
    <?php 
    session_start();
    if(isset($_SESSION["username"])){ header("Location: mainscreen.php"); };
    ?>

    <div class="container">
        <form action="register.php" method="post">
            <div class="">
                <label for="username" class="">username</label>
                <input type="text" class="" id="username" name="username" autofocus autocomplete="off">
            </div>
            <div class="">
                <label for="password" class="">password</label>
                <input type="password" class="" id="password" name="password">
            </div>
            <input type="submit" value="register" class="">
        </form>
    </div>
</body>
</html>


