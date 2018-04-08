for(let x = 1; x<3.5;){
            if( inSelect(FightX,FightY,FightW,FightH) ){
                console.log(inSelect(inSelect(FightX*x,FightY,FightW,FightH)))
                inAttack = true;
                if ( inSelect(FightX*1,FightY,FightW,FightH) ){
                    //console.log(attack1);
                    attack1 = true;
                    attack2 = false;
                    attack3 = false;
                    attack4 = false;
                }else if( inSelect(FightX*1.5,FightY,FightW,FightH) ){
                    attack1 = false;
                    attack2 = true;
                    attack3 = false;
                    attack4 = false;
                }else if( inSelect(FightX*1.5,FightY,FightW,FightH) ){
                    attack1 = false;
                    attack2 = false;
                    attack3 = true;
                    attack4 = false;
                }else if( inSelect(FightX*1.5,FightY,FightW,FightH) ){
                    attack1 = false;
                    attack2 = false;
                    attack3 = false;
                    attack4 = true;
                }else{
                    inAttack = false 
                }
            }
            x+=.5
        }

if(inAttack){
    if(attack1){
        pika.moveDamage(pika.moves[0])
        attackCalc.attackProp(pika.moves[0], attackPower, pika.level, pika.attackPow, 35)
    }else if(attack2){
        pika.moveDamage(pika.moves[1])
        attackCalc.attackProp(pika.moves[1], attackPower, pika.level, pika.attackPow, 35)
    }else if(attack2){
        pika.moveDamage(pika.moves[2])
        attackCalc.attackProp(pika.moves[2], attackPower, pika.level, pika.attackPow, 35)
    }else if(attack2){
        pika.moveDamage(pika.moves[3])
        attackCalc.attackProp(pika.moves[3], attackPower, pika.level, pika.attackPow, 35)
    }

}
    