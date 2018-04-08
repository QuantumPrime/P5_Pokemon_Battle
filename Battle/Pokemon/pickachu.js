class Pickachu{
    
    constructor(){
        this.pokName = "Pikachu"
        this.HealthEV = 0;
        this.HealthIV = 0;
        this.AttackEV = 0;
        this.AttackIV = 0;
        this.level = 1;
        this.baseHealth = 35;
        this.baseAttack = 55

        this.calcStats();
       
        this.health = this.maxHealth
        this.allmoves = new allMoves;
        this.pokeType = "Electric";
        this.moves = ["Tackle", "ThunderShock", "hold3", "hold4"];
        this.update(0);
    }
    
    show(){
        rectMode(CORNER);
        w = 190*this.BarMod;
        noStroke();
        fill(10,194,20);
        rect(2,248, w ,12);
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(2,248,190,12);
        fill(255);
        textSize(21);
        textAlign(LEFT);
        text(this.pokName + "   " + "Lvl: "+ this.level, 2, 244);
        image(pikaImg, playerPos[0], playerPos[1]);
    }
    update(damage){
        this.health -= damage;
        //this.BarMod = ((this.health-damage) * this.mult)/100;
        this.BarMod = this.health/this.maxHealth;
        if(this.BarMod<= 0){
            this.BarMod = 0;
        }
    }

    calcStats(){
        //https://cdn.bulbagarden.net/upload/d/d4/HP_calc.png
        this.maxHealth1 = this.baseHealth + this.HealthIV;
        this.maxHealth2 = sqrt(this.HealthEV)/4;
        this.maxHealth = ((this.maxHealth1 * 2 + this.maxHealth2 * this.level)/100) + this.level + 10;
        this.maxHealth = Math.round(this.maxHealth);
        //console.log(this.maxHealth);

        //https://cdn.bulbagarden.net/upload/d/d6/Statcalc_gen12.png
        this.attackCalc1 = this.baseAttack + this.AttackIV;
        this.attackCalc2 = sqrt(this.HealthEV)/4;
        this.attack = (((this.attackCalc1 * 2 + this.attackCalc2) * this.level)/100) + 5;
        this.attack = Math.round(this.attack);
        console.log(this.attack);
    }

    moveDamage(move){

        if(move == "Tackle"){
            if(allmoves.Tackle.attackType == this.pokeType){
                stabMod = 1.5;
            }else{
                stabMod = 1;
            }
            attackPower = allmoves.Tackle.Pow;

            //attackPP = allmoves.Tackle.Pow
            //attackPP = allmoves.Tackle.PP;
        }else if( move == "ThunderShock"){
            if(allmoves.ThunderShock.attackType == this.pokeType){
                stabMod = 1.5;
            }else{
                stabMod = 1.5;
            }
            attackPower = allmoves.ThunderShock.Pow;
        }
    }
    movePP(move, sub){
        if(move == "Tackle"){
            attackPP = allmoves.Tackle.PP - sub;
            if(attackPP < 0){
                attackPP = 0
            }
        }else if(move == "ThunderShock"){
            attackPP = allmoves.ThunderShock.PP - sub;
            if(attackPP < 0){
                attackPP = 0
            }
        }else{
            attackPP = 0;
        }
    }
}