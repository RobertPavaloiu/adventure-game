// Player Classes
class Player{
constructor(maxHealth, currentHealth, damage, critical, potions){
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.damage = damage;
    this.critical = critical;
    this.potions;
    this.criticalChance = 10;
}
}

class Wizard extends Player{
    constructor(currentHealth){
        this.currentHealth = currentHealth;
        super(criticalChance)
        this.damage = 8;
        this.critical = 16;
        this.potions = 4;
        this.maxHealth = 80;
    }
}

class Barbarian extends Player{
    constructor(currentHealth){
        this.currentHealth = currentHealth;
        super(criticalChance)
        this.damage = 4;
        this.critical = 10;
        this.potions = 2;
        this.maxHealth = 160;
    }
}

class Thief extends Player{
    constructor(currentHealth){
        this.currentHealth = currentHealth;
        super(criticalChance)
        this.damage = 6;
        this.critical = 12;
        this.potions = 3;
        this.maxHealth = 120;
    }
}

//Enemy Classes

class Enemy{
    constructor(maxHealth, currentHealth, damage, critical){
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.damage = damage;
        this.critical = critical;
        this.criticalChance = 15;
    }
}

class Slime extends Enemy{
    constructor(currentHealth){
        this.currentHealth = currentHealth;
        super(criticalChance)
        this.damage = 5;
        this.critical = 10;
        this.maxHealth = 40;
    }
}