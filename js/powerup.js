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