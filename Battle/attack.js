function Attack(){
	//this.pokemon = new Pickachu;
	//this.allmoves = new allMoves;
	
	this.damage1 = 0;
	this.damage2 = 0;
	this.fulldamage = 0;


	this.attackProp = function(attack, attackPow, pokLevel, pokAttack, oppDef, modifier){
		this.damage1 = ((2*pokLevel)/5) + 2;
		this.damage2 = attackPow * pokAttack/oppDef;
		this.fulldamage = (((this.damage1 * this.damage2)/(50)) + 2) * modifier;
		this.fulldamage = Math.round(this.fulldamage)
		console.log(this.fulldamage);
	}
}
