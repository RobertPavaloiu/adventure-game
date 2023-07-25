// Player Classes
class Player {
  constructor(maxHealth, currentHealth, damage, critical, potions) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.damage = damage;
    this.critical = critical;
    this.potions;
    this.criticalChance = 10;
  }
  takeDamage(amount) {
    this.currentHealth -= amount;
  }
  usePotion() {
    if (this.currentHealth + 20 >= this.maxHealth) {
      this.currentHealth = this.maxHealth;
    } else {
      this.currentHealth += 20;
    }
  }
  dealDamage() {
    let chance = randomChance(1, this.criticalChance);
    if (chance === this.critical) {
      return this.critical;
    } else {
      return this.damage;
    }
  }
}

class Wizard extends Player {
  constructor() {
    this.maxHealth = 80;
    this.currentHealth = this.maxHealth;
    super(criticalChance);
    this.damage = 8;
    this.critical = 16;
    this.potions = 4;
  }
}

class Barbarian extends Player {
  constructor() {
    this.maxHealth = 160;
    this.currentHealth = this.maxHealth;
    super(criticalChance);
    this.damage = 4;
    this.critical = 10;
    this.potions = 2;
  }
}

class Thief extends Player {
  constructor() {
    this.maxHealth = 120;
    this.currentHealth = this.maxHealth;
    super(criticalChance);
    this.damage = 6;
    this.critical = 12;
    this.potions = 3;
  }
}

//Enemy Classes

class Enemy {
  constructor(maxHealth, currentHealth, damage, critical) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.damage = damage;
    this.critical = critical;
    this.criticalChance = 15;
  }
  takeDamage(amount) {
    this.currentHealth -= amount;
  }
}

class Slime extends Enemy {
  constructor() {
    this.maxHealth = 40;
    this.currentHealth = this.maxHealth;
    super(criticalChance);
    this.damage = 5;
    this.critical = 10;
  }
  dealDamage() {
    let chance = randomChance(1, this.criticalChance);
    if (chance === this.critical) {
      return this.critical;
    } else {
      return this.damage;
    }
  }
}

// Helper Functions

function randomChance(min, max) {
  // Generate a random integer between min and max.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
