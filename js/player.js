// functie om de player te maken
function Player(damage, experience, ecredits, max_experience, level) {
    this.damage = damage;
    this.experience = experience;
    this.ecredits = ecredits;
    this.max_experience = max_experience;
    this.level = level;
}

player = new Player(5, 0, 0, 100, 1)
