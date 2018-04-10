class Rattata{
	 constructor(){
        this.pokName = "Rattata"

        this.HealthEV = 0;
        this.HealthIV = 0;

        this.AttackEV = 0;
        this.AttackIV = 0;

        this.DefenceEV = 0;
        this.DefenceIV = 0;

        this.SpecialEV = 0;
        this.SpecialIV = 0;

        this.SpeedEV = 0;
        this.SpeedIV = 0;

        
        this.level = 1;
        this.baseHealth = 30;
        this.baseAttack = 56
        this.baseDef = 35;
        this.baseSpAtk = 25;
        this.baseSpDef = 35;
        this.baseSpeed = 72;

        this.calcStats();

        this.health = this.maxHealth
        this.allmoves = new allMoves;
        this.pokeType = "Normal"
    
        
        //this.mult = 100.0/35.0;
        //this.BarMod = (this.health * this.mult)/100;
        this.moves = ["Tackle", "Tail Whip", "hold3", "hold4"];
        //this.moveProps(this.moves[0],this.moves[1],this.moves[2],this.moves[3]);
        this.update(0);
    }
    show(){
    	//Rect W= 201 H = 10, X = 620, Y = 189
    	//PosX = 587 PosY = 231
    	//new Color 9, 226, 22
    	//old Color 8, 216, 19
    	//blue color
    	//red Color 244, 99, 73
    	rectMode(CORNER);
        w = 175*this.BarMod;
        noStroke();
        fill(6, 185, 216);
        rect(615, 151, w ,8);
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(615,151,175,8);
        fill(255);
        textSize(16);
        textAlign(LEFT);
        text(this.pokName + "   " + "Lvl: "+ this.level, 615, 147);
    	image(ratImg, oppPos[0], oppPos[1]);

    }


    calcStats(){
        //https://cdn.bulbagarden.net/upload/d/d4/HP_calc.png
        //Health Calculations
        this.maxHealth1 = this.baseHealth + this.HealthIV;
        this.maxHealth2 = sqrt(this.HealthEV)/4;
        this.maxHealth = ((this.maxHealth1 * 2 + this.maxHealth2 * this.level)/100) + this.level + 10;
        this.maxHealth = Math.round(this.maxHealth);
        //console.log(this.maxHealth);

        //https://cdn.bulbagarden.net/upload/d/d6/Statcalc_gen12.png
        //attack Calculations
        this.attackCalc1 = this.baseAttack + this.AttackIV;
        this.attackCalc2 = sqrt(this.HealthEV)/4;
        this.attack = (((this.attackCalc1 * 2 + this.attackCalc2) * this.level)/100) + 5;
        this.attack = Math.round(this.attack);
        //console.log("Attack " + this.attack);

        //Defence Calculations
        this.DefCalc1 = this.baseDef + this.DefenceIV;
        this.DefCalc2 = sqrt(this.DefenceEV)/4;
        this.defence = (((this.DefCalc1 * 2 + this.DefCalc2) * this.level)/100) + 5;
        this.defence = Math.round(this.defence);
        //console.log("Defence " + this.defence);

        this.SpAtkCalc1 = this.baseSpAtk + this.SpecialIV;
        this.SpAtkCalc2 = sqrt(this.SpecialEV)/4;
        this.SpAtack = (((this.DefCalc1 * 2 + this.DefCalc2) *this.level)/100) + 5;
        
        //Special Defence Calculations
        this.SpDefCalc1 = this.baseSpDef + this.SpecialIV;
        this.SpDefCalc2 = sqrt(this.SpecialIV)/4;
        this.SpDef = (((this.SpDefCalc1 * 2 + this.DefCalc2) * this.level)/100) + 5;
        this.SpDef = Math.round(this.SpDef);
        //console.log("Special Defence " + this.SpDef);

        //Speed Calculations
        this.SpeedCalc1 = this.baseSpeed + this.SpeedIV;
        this.SpeedCalc2 = sqrt(this.SpeedEV)/4;
        this.Speed = (((this.SpeedCalc1 * 2 + this.SpeedCalc2) * this.level)/100) + 5;
        this.Speed = Math.round(this.Speed);
        //console.log("Speed " + this.Speed);
    }

     update(damage){
        this.health -= damage;
        //this.BarMod = ((this.health-damage) * this.mult)/100;
        this.BarMod = this.health/this.maxHealth;
        if(this.BarMod<= 0){
            this.BarMod = 0;
        }
    }


}
