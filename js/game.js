onload = init;

let images = [];

// als de pagina opstart dat er png's worden geladen
function init() {
    images = ["../images/crab.jpg", "../images/crab2.jpg", "../images/armedcrab.jpg"];
}

// als er op een knop van een gebied word gedrukt dat het "gebied" verandert
function beach_next(){
    document.getElementById("game_body").style = "background-image: url(../images/beach.jpg)";
    images = ["../images/crab.jpg", "../images/crab2.jpg", "../images/armedcrab.jpg"];
}
function woods_next(){
    document.getElementById("game_body").style = "background-image: url(../images/woods.png)";
    images = ["../images/goblin.png", "../images/goblin2.png", "../images/goblin3.png"];
}
function mountain_next(){
    document.getElementById("game_body").style = "background-image: url(../images/mountain.png)";
    images = ["../images/viking.png", "../images/viking2.png", "../images/viking3.png"];
}
function temple_next(){
    document.getElementById("game_body").style = "background-image: url(../images/temple.png)";
    images = ["../images/temple_guard1.png", "../images/temple_guard2.png", "../images/temple_guard3.png"];
}
function hell_next(){
    document.getElementById("game_body").style = "background-image: url(../images/hell.png)";
    images = ["../images/slave1.png", "../images/slave2.png", "../images/slave3.png"];
}





// functie om de player te maken
function Player(damage, experience, ecredits, max_experience, level) {
    this.damage = damage;
    this.experience = 0;
    this.ecredits = 0;
    this.max_experience = 100;
    this.level = 1;
}
// functie om de enemy te maken
function Enemy(max_health, current_health, current_image, exp_drop, ecr_drop) {
    this.max_health = max_health;
    this.current_health = current_health;
    this.current_image = 0;
    this.exp_drop = exp_drop;
    this.ecr_drop = ecr_drop;
}

// player en enemy worden met hun waardes aangemaakt
player = new Player(5, 0, 0, 100, 1)
enemy = new Enemy(25, 25, 0, 18, 3)

Player.prototype.receive_powerup = function() {
    if (this.ecredits >= 50){
        this.damage = this.damage + 5;
        this.ecredits = this.ecredits - 50;
    }else{
        console.log("niet genoeg schmeckle schmockles")
    }
}

function powerup() {
    player.receive_powerup();
}





// als de player clickt dat de enemy damage krijgt
Player.prototype.attack = function () {
    return this.damage;
}
function do_damage() {
    enemy.receiveDamage(player.attack());
}

// als een moster dood gaat dat spullen geeft
function give_exp() {
    player.receiveExperience(enemy.giving_exp());
}
Enemy.prototype.giving_exp = function () {
    return this.exp_drop;
}

function give_ecr() {
player.receiveEcredits(enemy.giving_ecr());
}
Enemy.prototype.giving_ecr = function () {
    return this.ecr_drop;
}

// als een monster dood gaat dat hij exp en geld dropt, ook dat hij random is
Enemy.prototype.receiveDamage = function (damage) {
    // kijkt of het moster dood is of niet
    if (this.current_health > player.damage) {
        // kijkt of het en crit is of niet
        if(Math.floor(Math.random() * 101) < 10){
            this.current_health -= (damage / 2);
            console.log("weak_hit!")
        }else if(Math.floor(Math.random() * 101) > 90){
            this.current_health -= (damage * 2);
            console.log("CRITICAL HIT")
        }else{
            this.current_health -= damage
        }
    } else {
        this.max_health = Math.floor(this.max_health * 1.05);
        this.current_health = this.max_health;
        give_exp()
        give_ecr()
        

        /*Generate a random number*/
        this.current_image = Math.floor(Math.random() * images.length);
        document.getElementById("enemy_sprite").src = images[this.current_image];

    }
    console.log(this.current_health);
    document.getElementById("current-hp").innerHTML = this.current_health + "hp/" + this.max_health + "hp";
}

// dat de player exp krijgt
Player.prototype.receiveExperience = function (exp_drop) {
    this.experience += enemy.exp_drop;
    enemy.exp_drop = Math.floor(enemy.exp_drop * 1.05);
    // console.log("You have " + this.experience + " experience");
    // console.log("you need: " + (this.max_experience - this.experience).toFixed(0) + " more exp!")
    document.getElementById("current-exp").innerHTML = this.experience + "exp/" + this.max_experience.toFixed(0) + "exp";
}

Player.prototype.receiveEcredits = function (ecr_drop) {
    this.ecredits += enemy.ecr_drop;
    enemy.ecr_drop = Math.floor(enemy.ecr_drop * 1.1);
    // console.log("You have " + this.ecredits + " Ecredits");
}

Player.prototype.levelup = function () {
    this.level = this.level + 1;
    this.damage = this.damage + 1;
    this.experience = 0;
    this.max_experience = this.max_experience * 1.1
    document.getElementById("current-lvl-bar").innerHTML = "Lv." + this.level
    // console.log("you need: " + this.max_experience.toFixed(0) + " experience to level up!");
    // console.log("you are level: " + this.level);
    // console.log("you currently do: " + this.damage + " damage");
}



// loop voor updaten hp en exp bar
function game_loop() {
    /*Elke 100 ms update om bijv nieuwe waardes te tekenen*/
    document.getElementById("current-hp-bar").style.width = enemy.current_health / enemy.max_health * 100 + "%";
    if(player.experience >= player.max_experience){
        player.levelup()
    }
    // console.log("Current XP :"  + player.experience);
    // console.log("Max XP :"  + player.max_experience);
    document.getElementById("current-exp-bar").style.width = player.experience / player.max_experience * 100 + "%";

    if(woods){
        if(player.level >= 5){
            woods.style = "display: flex";
        }
    }
    if(mountain){
        if(player.level >= 10){
            mountain.style = "display: flex";
        }
    }
    if(temple){
        if(player.level >= 15){
            temple.style = "display: flex";
        }
    }
    if(hell){
        if(player.level >= 20){
            hell.style = "display: flex";
        }
    }
    document.getElementById("stat_level").innerHTML     = "THOU are level: " + player.level
    document.getElementById("stat_damage").innerHTML    = "THOU deal: " + player.damage + " damage"
    document.getElementById("stat_exp").innerHTML       = "THOU have: " + player.experience + " exp"
    document.getElementById("stat_ecredits").innerHTML  = "THOU have: " + player.ecredits + " Ecredits"

    // Set the values to the hidden form as wel
    document.getElementById("form_lvl").value = player.level;
    document.getElementById("form_xp").value = player.experience;
    document.getElementById("form_dmg").value = player.damage;
    document.getElementById("form_ecrd").value = player.ecredits;
    }



setInterval(game_loop, 100);
