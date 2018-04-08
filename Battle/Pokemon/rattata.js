class Rattata{
	 constructor(){
        this.pokName = "Rattata"
        //this.EV;
        //this.IV;
        this.maxHealth = 30;
        this.attackPow = 56;
        this.def = 35
        this.level = 1;
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
        w = 190*this.BarMod;
        noStroke();
        fill(6, 185, 216);
        rect(587, 151, w ,8);
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(587,151,190,8);
        fill(255);
        textSize(16);
        textAlign(LEFT);
        text(this.pokName + "   " + "Lvl: "+ this.level, 587, 147);
    	image(ratImg, oppPos[0], oppPos[1]);

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