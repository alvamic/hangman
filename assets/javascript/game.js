
setTimeout(first,33000); 
var Hero = false;
var enemy = false;
var marioBool = false;
var princessPeachBool = false;
var luigiBool = false;
var toadBool = false; 
var waarioBool = false;
var evilKoopa1Bool = false;
var evilKoopa2bool = false; 
var bowserBool = false; 



function first() {
    alert("Choose your character on the left by clicking on them");
    $(".fighterInfo").css("visibility","visible");
  }

var element = document.getElementById("mario2");
element.addEventListener("click",mario22);


function mario22(){
    if (!enemy) {
    alert("You chose Mario"); $(".instructions").empty();
    $("#mario2").appendTo(".fighter");
    $("#hp").html(mario.hp);
    Hero = true;
    marioBool = true; 
    console.log(mario22);
    console.log(enemy);
    }
    
}

var Wario = document.getElementById("wario");
Wario.addEventListener("click",wario);

function wario(){
    if (Hero){
    alert("Enemy Chosen Wario");
    $("#wario").appendTo(".fighter");
    $("#wario").css({"margin-left":"25%"});
    $("#enemyHp").html(Waario.hp);
    enemy = true;
    waarioBool = true;
    }
     
}

var bowser1 = document.getElementById("bowser");
bowser1.addEventListener("click",bowser2);

function bowser2(){
    if (Hero){
    alert("Enemy Chosen Bowser");
    $("#bowser").appendTo(".fighter");
    $("#bowser").css({"float":"right"});
    $("#enemyHp").html(bowser.hp);
    }
    enemy = true;
    bowserBool = true; 
}

var evilKoopa11 = document.getElementById("evilKoopa1");
evilKoopa11.addEventListener("click",evilKoop);

function evilKoop(){
    if (Hero){
    alert("Enemy Chosen Evil Koopa");
    $("#evilKoopa1").appendTo(".fighter");
    $("#evilKoopa1").css({"float":"right"});
    $("#enemyHp").html(evilKoopa1.hp);
    }
    enemy = true;
    evilKoopa1Bool = true; 
}
var evilKoopa11 = document.getElementById("evilKoopa2");
evilKoopa11.addEventListener("click",evilKoop2);

function evilKoop2(){
    if (Hero){
    alert("Enemy Chosen Evil Koopa2");
    $("#evilKoopa2").appendTo(".fighter");
    $("#evilKoopa2").css({"float":"right"});
    $("#enemyHp").html(evilKoopa2.hp);
    enemy = true;
    evilKoopa2bool = true; 
    }
    
}

var attackButton = document.getElementById("attack");
attackButton.addEventListener("click",marioClick);

function marioClick(){
    enemy = false;
    Hero = false;
    alert("Mario's Attack Power" + mario.attack);
    //attacking//
    if ((marioBool) && (waarioBool)){
       Waario.hp = Waario.hp - mario.attack;
       mario.hp = mario.hp - Waario.attack;
       $("#hp").html(mario.hp);
       $("#enemyHp").html(Waario.hp);
       mario.attack = mario.attack + 8;
       assesing();
    } 
    if ((mario.hp === 0) && (waarioBool)) {
        alert("You're HP = 0..the  journey is over, choose another character on the left and try again");
        $("#wario").appendTo(".wario");
        $("#mario2").appendTo(".mario");
        $(".fighter").empty();
        $("#hp").html(0);
        $("#enemyHp").html(0);
        Wario.hp = 100;
        mario.hp = 100;
        mario.attack = 8;
        } 
    
    
  if ((marioBool) && (bowserBool)){
        bowser.hp = bowser.hp - mario.attack;
       mario.hp = mario.hp - bowser.attack;
       $("#hp").html(mario.hp);
       $("#enemyHp").html(bowser.hp);
       mario.attack = mario.attack + 8;
       assesing();
       
    }
    if ((mario.hp === 0) && (bowserBool)) {
        alert("You're HP = 0..the  journey is over, choose another character on the left and try again");
        $("#bowser").appendTo(".bowser");
        $("#mario2").appendTo(".mario");
        $(".fighter").empty();
        $("#hp").html(0);
        $("#enemyHp").html(0);
        bowser.hp = 100;
        mario.hp = 100;
        mario.attack = 8;
        } 
    if ((marioBool) && (evilKoopa1Bool)){
        evilKoopa1.hp = evilKoopa1.hp - mario.attack;
       mario.hp = mario.hp - evilKoopa1.attack;
       $("#hp").html(mario.hp);
       $("#enemyHp").html(evilKoopa1.hp);
       mario.attack = mario.attack + 8;
       assesing();
    }
    if ((marioBool) && (evilKoopa2bool)){
        evilKoopa2.hp = evilKoopa2.hp - mario.attack;
       mario.hp = mario.hp - evilKoopa2.attack;
       $("#hp").html(mario.hp);
       $("#enemyHp").html(evilKoopa2.hp);
       mario.attack = mario.attack + 8;
       assesing2();
    }

    if ((mario.hp === 0) && (evilKoopa2bool)) {
        alert("You're HP = 0..the  journey is over, choose another character on the left and try again");
        $("#evilKoopa2").appendTo(".evilKoopa2");
        $("#mario2").appendTo(".mario");
        $(".fighter").empty();
        $("#hp").html(0);
        $("#enemyHp").html(0);
        bowser.hp = 100;
        mario.hp = 100;
        mario.attack = 8;
        } 
    
}

// Assessing the damage//
function assesing(){
    if ((evilKoopa1.hp < 0)&&(evilKoopa1Bool)){
        alert("You Won, Choose a new enemy");
        $("#mario2").appendTo(".mario2");
        $(".fighter").empty();
        $("#mario2").appendTo(".fighter");
        mario.hp = 100;
        $("#hp").html(mario.hp);
        $("#enemyHp").empty();
        enemy = false;
        Hero = true;
        evilKoopa1Bool = false;
    }  
}
function assesing2(){
    if ((evilKoopa2.hp < 0 )&&(evilKoopa2bool)){
        alert("You Won, Choose a new enemy");
        $("#mario2").appendTo(".mario2");
        $(".fighter").empty();
        $("#mario2").appendTo(".fighter");
        mario.hp = 100;
        $("#hp").html(mario.hp);
        $("#enemyHp").html(0);
        enemy = false;
        Hero = true;
        evilKoopa2Bool = false;
        console.log(assesing2);
    }
}
var mario = {
    name : "Mario",
    hp :100,
    attack:8,
}
var Waario = {
    name : "Wario",
    hp: 100,
    attack: 50,
}
var bowser = {
    name: "Bowser",
    hp: 100,
    attack: 75,
}
var evilKoopa1 = {
    name: "Evil Koopa",
    hp: 100,
    attack: 15,

}
var evilKoopa2 = {
    name: "Evil Koopa",
    hp: 100,
    attack: 25,
}