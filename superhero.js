function Hero (name, hp, weapon) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.eat = function () {
        hp = hp + 10;
    }
    this.punch = function() {
        enemyhp = enemyhp - 10;
    }
    this.weaponAttack = function () {
        enemyhp = enemyhp - 50;
    }
}

function Troll (name, hp, weapon) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.eat = function () {
        hp = hp + 10;
    }
    this.grunt = function () {
        attack = attack + 4;
    }
    this.bite = function () {
        enemyhp = enemyhp - 20;
    }
    this.weaponAttack = function () {
        enemyhp = enemyhp - 35;
    }
}

var spiderman = new Hero('Spiderman', 300, 'webs');
var chuckNorris = new Hero('Chuck Norris', 9000, 'roundhouse kick');

var trogdor = new Troll('Trogdor', 350, 'huge arms');
var strongsad = new Troll('Strongsad', 200, 'crying');