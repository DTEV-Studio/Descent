// ################################################################# //

// als de player clickt dat de enemy damage krijgt
Player.prototype.attack = function () {
    return this.damage;
}
function do_damage() {
    enemy.receiveDamage(player.attack());
}

// als een monster dood gaat dat hij exp en geld dropt, ook dat hij random is
Enemy.prototype.receiveDamage = function (damage) {
    // kijkt of het monster dood is of niet
    if (this.current_health > player.damage) {
        // kijkt of het en crit is of niet
        if(Math.floor(Math.random() * 101) < 10){
            this.current_health -= (damage / 1.4);
            console.log("weak_hit!")
        }else if(Math.floor(Math.random() * 101) > 90){
            this.current_health -= (damage * 1.4);
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
    // console.log(this.current_health);
    document.getElementById("current-hp").innerHTML = this.current_health.toFixed(0) + "hp/" + this.max_health + "hp";
}

// ################################################################# //

function give_exp() {
    player.receiveExperience(enemy.giving_exp());
}
Enemy.prototype.giving_exp = function () {
    return this.exp_drop;
}
// dat de player exp krijgt
Player.prototype.receiveExperience = function (exp_drop) {
    this.experience += enemy.exp_drop;
    enemy.exp_drop = Math.floor(enemy.exp_drop * 1.05);
    // console.log("You have " + this.experience + " experience");
    // console.log("you need: " + (this.max_experience - this.experience).toFixed(0) + " more exp!")
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



// als een monster dood gaat dat hij spullen geeft
function give_ecr() {
player.receiveEcredits(enemy.giving_ecr());
}
Enemy.prototype.giving_ecr = function () {
    return this.ecr_drop;
}
Player.prototype.receiveEcredits = function (ecr_drop) {
    this.ecredits += enemy.ecr_drop;
    enemy.ecr_drop = Math.floor(enemy.ecr_drop * 1.1);
    // console.log("You have " + this.ecredits + " Ecredits");
}

// ################################################################# //

function game_loop() {

    /*Elke 100 ms update om bijv nieuwe waardes te tekenen*/
    document.getElementById("current-hp-bar").style.width = enemy.current_health / enemy.max_health * 100 + "%";
    if(player.experience >= player.max_experience){
        player.levelup()
    }
    // console.log("Current XP :"  + player.experience);
    // console.log("Max XP :"  + player.max_experience);
    document.getElementById("current-exp-bar").style.width = player.experience / player.max_experience * 100 + "%";
    document.getElementById("current-exp").innerHTML = player.experience + "exp/" + player.max_experience.toFixed(0) + "exp";

    document.getElementById("stat_level").innerHTML     = "You are level: " + player.level
    document.getElementById("stat_damage").innerHTML    = "You deal: "      + player.damage +       " damage"
    document.getElementById("stat_exp").innerHTML       = "You have: "      + player.experience +   " exp"
    document.getElementById("stat_ecredits").innerHTML  = "You have: "      + player.ecredits +     " Ecredits"

    // Set the values to the hidden form as wel
    document.getElementById("form_lvl").value = player.level;
    document.getElementById("form_xp").value = player.experience;
    document.getElementById("form_dmg").value = player.damage;
    document.getElementById("form_ecrd").value = player.ecredits;
    }

setInterval(game_loop, 100);

// ################################################################# //