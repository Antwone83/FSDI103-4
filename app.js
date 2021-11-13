let Hunger= 50;
let Happiness= 50;
let Energy= 50;
// the hunger, hapiness and energy
// should be greater than 0 and less than 100 **
//** if 
function displayValues(){
    document.getElementById("petHunger").innerHTML=`${Hunger}` ;
    document.getElementById("petHappiness").innerHTML=`${Happiness}` ;
    document.getElementById("petEnergy").innerHTML=`${Energy}` ;
}

function feed(){
    if((Hunger>0 && Hunger<100) && (Happiness>0 && Happiness<100)){
    // increasing happiness and decrease energy
    Happiness=Happiness+10;
    Hunger=Hunger-10;
   displayValues();
    }
}

function pet(){
    if(Happiness>0 && Happiness<100){
        // increase happiness
    Happiness=Happiness+10;
   displayValues();
    }
    
}

function play(){
    // increase happiness and decrease energy
    Happiness=Happiness+10;
    Energy=Energy-10;
    displayValues();
}

displayValues()