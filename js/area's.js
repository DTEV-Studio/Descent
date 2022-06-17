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


function game_loop() {

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

    } setInterval(game_loop, 100);
