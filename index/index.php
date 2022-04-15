<?php session_start(); ?>
<?php require_once "../require_once/header.php" ?>
<?php $_SESSION["logged_in"] = false ?>
<?php if($_SESSION["logged_in"] == false){ ?>

<div class="container">
    <form action="login.php" method="post">
        <div class="mb-3">
            <label for="username" class="form-label">username</label>
            <input type="text" class="form-control" id="username" name="username" autofocus autocomplete="off">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>
        <input type="submit" value="Inloggen" class="btn btn-primary">
    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>

<?php }; ?>


