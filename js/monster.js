// functie om de enemy te maken
function Enemy(max_health, current_health, current_image, exp_drop, ecr_drop) {
    this.max_health = max_health;
    this.current_health = current_health;
    this.current_image = current_image;
    this.exp_drop = exp_drop;
    this.ecr_drop = ecr_drop;
}

enemy = new Enemy(25, 25, 0, 18, 3)
