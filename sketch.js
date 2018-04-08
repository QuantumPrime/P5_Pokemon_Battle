//Pokemon Battle Clone
var attack = 0;
var playerPos = [100, 250]
var oppPos = [579, 169]
var mainFight = true;
var fightMenu = false;
var inAttack = false;
var PPMod = [0,0,0,0];
var stabMod = 1;
var attack1, attack2, attack3, attack4;
var attackPower, attackPP;
var attack;
var FightX = 299;
var FightY = 308;
var FightW = 100;
var FightH = 40;
var inFightBox = false;

//var bg;
//var pickachu;
var w;

function preload(){
    bg = loadImage("assets/map.png");
    ratImg = loadImage("assets/ratFar.png");
    pikaImg = loadImage("assets/pickachu.png");
}

function setup() {
    createCanvas(800,400);

    allmoves = new allMoves   
    rat = new Rattata; 
    pika = new Pickachu;
    attackCalc = new Attack;
    //291, 308
    
}

function draw() {
    //update()
    background(bg);
    update();
    if(mainFight){
        showBattleMenu(165, 3, 3);
    }else if(fightMenu){
        showFightMenu(0, 108, 204);
    }
    pika.show();
    pika.update(attack);
    rat.show();
    rat.update(attack);
    //rat.update();
}   

function mousePressed(){
    if(inFightBox){
        mainFight = false;
        fightMenu=true;
    }
    if(inAttack){
        if(attack1){
            PPMod[0]++;
            pika.moveDamage(pika.moves[0]);
            attackCalc.attackProp(pika.moves[0], attackPower, pika.level, pika.attack, 35, stabMod);
        }else if(attack2){
            PPMod[1]++
            pika.moveDamage(pika.moves[1]);
            attackCalc.attackProp(pika.moves[1], attackPower, pika.level, pika.attack, 35 , stabMod);
            console.log("here");
        }

    }
    
}


function update(){
     //console.log(mouseX);
    //First Menu
    if( inSelect(FightX,FightY,FightW,FightH) ){
        inFightBox = true;
        mainFight = false;
        if(!fightMenu){
            showBattleMenu(239, 9, 9);
        }
    }else{ 
        if(!fightMenu){
            mainFight=true;
            inFightBox = false;
        }
    }

    //Second/Moves selection menu
    if(fightMenu){
        //console.log(inAttack)
        /*for(var x = 1; x < 3;){
            if ( inSelect(FightX*x,FightY,FightW,FightH) ){*/
                if( inSelect(FightX,FightY,FightW,FightH) ){
                    inAttack = true;
                    attack1 = true;
                }else if( inSelect(FightX*1.5,FightY,FightW,FightH) ){
                    inAttack = true;
                    attack1 = false;
                    attack2 = true;
                    attack3 = false;
                    attack4 = false;
                }else if( inSelect(FightX*2,FightY,FightW,FightH) ){
                    inAttack = true;
                    attack1 = false;
                    attack2 = false;
                    attack3 = true;
                    attack4 = false;
                }else if( inSelect(FightX*2,FightY,FightW,FightH) ){
                    inAttack = true;
                    attack1 = false;
                    attack2 = false;
                    attack3 = false;
                    attack4 = true;
                }else{
                    inAttack = false;
                    attack1 = false;
                    attack2 = false;
                    attack3 = false;
                    attack4 = false;  
                }
                
            /*}else{
                inAttack = false;
                    
            }*/
        //x+=0.5
         
    }
}

function inSelect(x, y, w, h){
    if(mouseX >= x - w/2 && mouseX <= x + w/2 &&
        mouseY >= y - h/2 && mouseY <= y + h/2){
        return true;
    }else{
        return false;
    }
    
}

function showBattleMenu(r,g,b){
    rectMode(CENTER);
    stroke(0);
    strokeWeight(2);
    fill(r,g,b);
    rect(FightX, FightY, FightW, FightH);
    fill(255);
    textAlign(CENTER);
    textSize(21);
    text("FIGHT!", FightX, FightY+5);
}


function showFightMenu(r,g,b){
    rectMode(CENTER);
    stroke(0);
    strokeWeight(2);
    for(var i = 1; i<3;){
        for(var m = 0; m<4; m++){
            //console.log(pika.moves[m]);
            fill(r,g,b);
            rect(FightX*i, FightY, FightW, FightH);
            fill(255);
            textAlign(CENTER);
            textSize(15);
            text(pika.moves[m], FightX*i, FightY);
            pika.movePP(pika.moves[m], PPMod[m]);
            textSize(10);
            text("PP: " + attackPP, FightX*i, FightY+12);
            i+=.5;
        }
    }
}
