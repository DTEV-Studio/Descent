/*Defineer wat een speler is*/
function player(naam, schade, niveau) {
    /*this.waarde defineert welke eigenschappen een speler heeft*/
    /*= waarde vult het eigenschap in*/
    this.name = naam;
    this.damage = schade;
    this.level = niveau;
    this.experience = ervaring;
}
/*Dit maakt een functie aan IN het speler object*/
player.prototype.levelUp = function () {
    this.level++;
}
player.prototype.defeatedEnemy = function () {
    this.receiveExperience(100);

}
player.prototype.receiveExperience = function (ervaring) {
    this.experience = this.experience + ervaring;
    if (this.experience > 150) {
        this.levelUp();
        this.experience = 0;
    }
}
player.prototype.discoverNewArea = function () {
    this.receiveExperience(50);
}
player.prototype.death = function () {
    this.level--;
}
player.prototype.attack = function () {
    enemy.receiveDamage(this.damage);
}
function enemy(gezondheid) {
    this.health = gezondheid;
}
enemy.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
}
let speler = new player("kelvin", 20, 1, 0);
let enemy = new enemy(100);

function attack() {
    speler.attack()
    console.log(enemy.health);
}
// function berekenen(getal_one, getal_two){
//     document.write(getal_one + getal_two);
// }
//
//
// berekenen(10,20);