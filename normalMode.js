
var boatRotation = 1 //Type 1 = vertical Type 2 = horizontal 
var boatPos; //Boat Position of players boats
var boatCount = 0 //The number of boats the player has placed
var boatNum = [] //Sequence of numbers that correspond to specific cell ids in the table
var boatNum2 = ["0","0","0","0","0"] //Version of boatNum without certain boats placed to check if boats are inside eachother
var botCount = 0; //The amount of boats the bot has placed
var bbNum = []; //Sequence of numbers that correspond to specific cell ids in the table
var bbNum2 = ["0","0","0","0","0","0"] //Version of boatNum without certain boats placed to check if boats are inside eachother
var submitt = false //
var hitcellnum = 0 //The amount of cells that have been hit
var firedatabase = [] //Player shot storage
var allshots = [] //Every shot and id of that cell that has been taken
var allshotsCount = 0 //All shots that have been taken (hits and misses)
var playerTurn = true //Determines if its the player or bot's turn
var botfirehistory = [] //The history 
var botfirecount = 0 //The amount of shots that the bot has taken
var botLastShot = [] //NOT USED
var botHitCount = 0 // 
var hits = 0 //The amount of cells that have been hit
var hitcheck1 = 0 //
var hitcheck2 = 0 //
var peter = 0 //peter variable
var tfHistory = [] // converts botfirehistroy into true or false statments hit=true miss=false
var botSC1 = 0 //The amount of boats the boat has sunk
var botSC2 = 0 //Version of botSC1 without certain boats placed to check if boats are inside eachother
var openLoop = 0 //Failsafe
mousecellid = 0



/* 
 _____       ____         _ 
|_   _|__   |    \ ___   |_|
  | || . |  |  |  | . |   _ 
  |_||___|  |____/|___|  |_|
  
  -Make continue button disappear when it shouldnt be pressed
  -Make boats real boats
  -Make a win / Lose scene
  -Make "extreme mode" (maybe)
  -Full screen prompt
  -"How to play" menu
  -Home screen revamp
  */







const miscBotSpeech =[ // miscelanous dialogue for the bot to say throughout the game
    "I am going to destroy you.", 
    "This game is all i have left.",
    "Nice weather we are having.",
    "Hey there.",
    "You're going down man!",
    "I love battleships 😍",
    "Heeeeey!",
    "Hello!",
    "Hi!",
    "Let's play some battleships",
    "Hi i'm Brad 😆",
    "Hello sir.",
    "Arrrrr me hearty",
    "Call me a pirate the way I battle ships 😂 ",
    "I make boats go BOOM!",

] 

const hitBotSpeech = [ // dialogue for bot to say when his boat gets hit
    "RAHHHHHHHHHHHHHHHHH1!!!!!", 
    "You're making me REALLY angry 🤬.",
    "MY FAMILY WAS ON THAT BOAT!",
    "STOP WINNING!",
    "I'M NOT MAD YOU ARE!",
    "GOSH DIDDLY DANG DARNIT!",
    "RATS!",
    "Why has god abandoned us?",
    "YOU'RE ON THIN ICE BUCKO!",
    "YOU RAPSCALLION!",
    "YOU SCOUNDREL!"

]

const sunkBotSpeech = [ // dialogue for bot when his boat gets sunk
"You sunk my battleship!",
]

const winningBotSpeech = [
    "Yipeeeeee!!!!!",
    "You are so predictable",
    "I am literally him",
    "I clicked a random square and it worked!!!",
    "Im so good at this hehehehehe",
    "Booyah!",
    
]

const playerMissSpeech = [
    "Hahhaahhahhaha you suck",
    "W",
    "That was a close one! Just kidding hahahaha",
    "How are you this bad ",
    "LOL",
    "Get better",
    "L bozo",
    "Get this boy a map XDD",
    "🤓",
    "You SUCK at this!",
    "Are you even trying????",
    "Please try harder!",
    "Waiting for you to start trying!",
    "You are playing like a bot."



]

const botMissSpeech = [
    "Im getting close! I can feel it!",
    "Rahhh i missed :((",
    "I missed!",
    "I can't find your boats >:(",
    "Where are your boats?!?!?!",
    "DAMMIT!",
    "I can smell your boat...",
    "I bet that was a near miss",
    "Ahhhhhhhhh i missed",
    "Grrrrrr"

]



const botEmotion = [
 "sad.jpg",
 "happy.jpg",
 "angry.jpg",
 "evil.jpg"
    
]


document.getElementById("botTitle").style.display = "none"
document.getElementById("playerTitle").style.display = "block"
document.getElementById("guessDiv").style.display = "none"
document.getElementById("botSpeech").innerHTML = miscBotSpeech[Math.floor((Math.random() * miscBotSpeech.length) + 0)]
document.getElementById("botImage").src = "evil.jpg"
document.getElementById("loadingGif").style.display = "none"
document.getElementById("boatSubmit").style.display = "none"



document.addEventListener("keydown", function (e){
    if (e.keyCode === 82) {
        
        rotateShip();
        
    }
});



function cellHover(tablecell){
    if(submitt == false){

        mousecellid = tablecell.id
    
        var q = tablecell.id - 10
        var a = tablecell.id - 1
        var b = tablecell.id
        var c = tablecell.id - - 1
        
        if(q < 10) {
            q = "0" + q
        }
        if(a < 10) {
            a = "0" + a
        }
        if(c < 10) {
            c = "0" + c
        }

        if(boatRotation == 1 && document.getElementById(q).style.backgroundColor !== "grey" && document.getElementById(tablecell.id).style.backgroundColor !== "grey" && document.getElementById(tablecell.id - - 10).style.backgroundColor !== "grey"){
            if((tablecell.id.substring(0, 1)) !=="9" && (tablecell.id.substring(0, 1)) !=="0"){

                document.getElementById(tablecell.id).style.backgroundColor = "green"
                document.getElementById(q).style.backgroundColor = "green"
                document.getElementById(tablecell.id - -10).style.backgroundColor = "green"
            }

        } else if(boatRotation == 2 && document.getElementById(a).style.backgroundColor !== "grey" && document.getElementById(b).style.backgroundColor !== "grey" && document.getElementById(c).style.backgroundColor !== "grey"){
            if((tablecell.id.substring(1, 2)) !=="0" && (tablecell.id.substring(1, 2)) !=="9"){

            document.getElementById(a).style.backgroundColor = "green"
            document.getElementById(b).style.backgroundColor = "green"
            document.getElementById(c).style.backgroundColor = "green"
            }
        
            
        }  
   
    }   
}

function cellReset(tablecell){
    
    var q = tablecell.id - 10
    var a = tablecell.id - 1
    var b = tablecell.id
    var c = tablecell.id - - 1
    
    if(q < 10) {
        q = "0" + q
    }
    if(a < 10) {
        a = "0" + a
    }
    if(c < 10) {
        c = "0" + c
    }

    if (boatRotation == 1){
        if (document.getElementById(q).style.backgroundColor == "green"){

            document.getElementById(tablecell.id).style.backgroundColor = "cornflowerblue"
            document.getElementById(q).style.backgroundColor = "cornflowerblue"
            document.getElementById(tablecell.id - -10).style.backgroundColor = "cornflowerblue"
       
        }
    } else if (boatRotation == 2){
        if(document.getElementById(b).style.backgroundColor == "green") {

            document.getElementById(a).style.backgroundColor = "cornflowerblue"
            document.getElementById(b).style.backgroundColor = "cornflowerblue"
            document.getElementById(c).style.backgroundColor = "cornflowerblue"
        }
    }
   
}



function rotateShip(){

    for (i=0; i<100; i++) {
        
        if (i<10) {
            i= "0" + i
        }
        
        if (document.getElementById(i).style.backgroundColor == "green"  )
        document.getElementById(i).style.backgroundColor = "cornflowerblue"
    }

        

        var q = mousecellid - 10
        var s = mousecellid - - 10
        var a = mousecellid - 1
        var b = mousecellid
        var c = mousecellid - - 1
        
        if(q < 10) {
            q = "0" + q
        }
        if(a < 10) {
            a = "0" + a
        }
        if(c < 10) {
            c = "0" + c
        }

    if (boatRotation !== 1 ){
        boatRotation = 1
        if (document.getElementById(q).style.backgroundColor == "cornflowerblue" && document.getElementById(s).style.backgroundColor == "cornflowerblue" 
        && document.getElementById(b).style.backgroundColor == "cornflowerblue" ) {
        document.getElementById(q).style.backgroundColor = "green"
        document.getElementById(b).style.backgroundColor = "green"
        document.getElementById(s).style.backgroundColor = "green"
        }

    }
    else {
        boatRotation = 2
        if (document.getElementById(a).style.backgroundColor == "cornflowerblue" && document.getElementById(c).style.backgroundColor == "cornflowerblue" 
        && document.getElementById(b).style.backgroundColor == "cornflowerblue" ) {
        document.getElementById(a).style.backgroundColor = "green"
        document.getElementById(b).style.backgroundColor = "green"
        document.getElementById(c).style.backgroundColor = "green"
        }
    }



        
        
    
}


function cellClicked(tablecell){

    //alert(tablecell.id)
    var boatPos = tablecell.id //position of center cell of boat
    var boatPosTop = boatPos - 10
    var boatPosBottom = boatPos - - 10
    var boatPosLeft = boatPos - 1
    var boatPosRight = boatPos - - 1
    var invalid = false
  
   

    


    if (boatCount<5) {  // Vertical placement
        boatCount = boatCount + 1

        if (boatCount == 5){

            document.getElementById("boatSubmit").style.display = "block"
            }

        if (boatPosTop<10) {
            boatPosTop.toString()
            boatPosTop = "0" + boatPosTop
        }

        if (boatPos<9) {
            boatPosLeft.toString()
            boatPosRight.toString()
            boatPosLeft = "0" + boatPosLeft
            boatPosRight = "0" + boatPosRight

        }

        if (boatRotation == 1 && (boatPos.substring(0, 1)!== "0") && (boatPos.substring(0, 1)!=="9") && invalid == false ){
            boatNum[boatCount] = boatPosTop + boatPos.toString() + boatPosBottom.toString();
            shipParameters();
        }
        
        
        if (boatRotation == 2 && (boatPos.substring(1, 2)!=="9" && (boatPos.substring(1, 2)!=="0")) && boatPos!=="9" && boatPos!=="0"){
            boatNum[boatCount] = boatPosLeft + boatPos.toString() + boatPosRight;
            shipParameters();
        }

        if (boatRotation == 1 && (boatPos.substring(0, 1)!== "0") && (boatPos.substring(0, 1)!=="9") && invalid == false ){ //vertical object 
            //alert(tablecell.id)
            document.getElementById(boatPos).style.backgroundColor = "grey"
            document.getElementById(boatPosBottom).style.backgroundColor = "grey"
            document.getElementById(boatPosTop).style.backgroundColor = "grey"


    //alert (boatNum[boatCount])



    } else   // Horizontal placement


        if (boatRotation == 2 && (boatPos.substring(1, 2)!=="9" && (boatPos.substring(1, 2)!=="0")) && boatPos!=="9" && boatPos!=="0" && invalid == false){ // horizontal object
        //alert(tablecell.id)
            document.getElementById(boatPos).style.backgroundColor = "grey"
            document.getElementById(boatPosLeft).style.backgroundColor = "grey"
            document.getElementById(boatPosRight).style.backgroundColor = "grey"
            //alert (boatNum[boatCount])



        } else 
            { alert("invalid")
            boatNum[boatCount] = 0   
            boatNum2[boatCount] = "0"
            boatCount = boatCount - 1

        }

        function shipParameters(){ // Areas that the ship can't be placed in
            for (i=1;i<boatCount;i++) {
                var q = boatNum[boatCount]
                var x = boatNum2[i]

                if( q.substring(0,2) == x.substring(0,2) ){
                    invalid = true
                }   

                else if( q.substring(0,2) == x.substring(2,4) ){
                    invalid = true
                }
                
                else if( q.substring(0,2) == x.substring(4,6) ){
                    invalid = true
                }

                else if( q.substring(2,4) == x.substring(0,2) ){
                    invalid = true
                }

                else if( q.substring(2,4) == x.substring(2,4) ){
                    invalid = true
                }

                else if( q.substring(2,4) == x.substring(4,6) ){
                    invalid = true
                }

                else if( q.substring(4,6) == x.substring(0,2) ){
                    invalid = true
                }
                else if( q.substring(4,6) == x.substring(2,4) ){
                    invalid = true
                }

                else if( q.substring(4,6) == x.substring(4,6) ){
                    invalid = true
                }


            }
        }
    

        boatNum2[boatCount] =  boatNum[boatCount]
    }
}

function submit() { //Changes the div, does bot boat placement
    if (boatCount == 5 && submitt == false) {
        document.getElementById("playerDiv").style.display = "none"
        document.getElementById("playerTitle").style.display = "none"
        document.getElementById("botTitle").style.display = "block"
        document.getElementById("guessDiv").style.display = "block"
        document.getElementById("botSpeech").innerHTML = miscBotSpeech[Math.floor((Math.random() * miscBotSpeech.length) + 0)]
        document.getElementById("botImage").src = "neutral.jpg"



        submitt = true
        
        for (f = 1; f<6; f++) {
            var botBoatPos= Math.floor((Math.random() * 99) + 1) //position of center cell of boat
            var botPosTop = botBoatPos- 10
            var botPosBottom = botBoatPos- - 10
            var botPosLeft = botBoatPos- 1
            var botPosRight = botBoatPos- - 1
            var bInvalid= false
            var botRotation = Math.floor((Math.random() * 2) + 1)
            botCount = botCount + 1
            botBoatPos= botBoatPos.toString()

            if (botBoatPos<10){
                botBoatPos= "0"+botBoatPos
            }
        
            if (botPosTop<10) {
                botPosTop = "0" + botPosTop
            }
        
            if (botBoatPos<9) {
                botPosLeft = "0" + botPosLeft.toString()
                botPosRight = "0" + botPosRight.toString()
        
            }
                
            if (botRotation == 1 && (botBoatPos.substring(0, 1)!== "0") && (botBoatPos.substring(0, 1)!=="9") && bInvalid == false ){
                bbNum[botCount] = botPosTop.toString() + botBoatPos.toString() + botPosBottom.toString();
                bshipParameters();
            }
                
                
            if (botRotation == 2 && (botBoatPos.substring(1, 2)!=="9" && (botBoatPos.substring(1, 2)!=="0")) && botBoatPos!=="9" && botBoatPos!=="0" && bInvalid == false){
                bbNum[botCount] = botPosLeft.toString() + botBoatPos.toString() + botPosRight.toString();
                bshipParameters();
            }


            else {         
                bbNum[botCount] = 0   
                bbNum2[botCount] = "0"
                botCount = botCount - 1
            }
            function bshipParameters(){
                for (i=1;i<botCount+1;i++) {
                    var y = bbNum[botCount]
                    var z = bbNum2[i]
    
                    if( y.substring(0,2) == z.substring(0,2) ){
                        bInvalid = true
                    }   
    
                    else if( y.substring(0,2) == z.substring(2,4) ){
                        bInvalid = true
                    }
                    
                    else if( y.substring(0,2) == z.substring(4,6) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(2,4) == z.substring(0,2) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(2,4) == z.substring(2,4) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(2,4) == z.substring(4,6) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(4,6) == z.substring(0,2) ){
                        bInvalid = true
                    }

                    else if( y.substring(4,6) == z.substring(2,4) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(4,6) == z.substring(4,6) ){
                        bInvalid = true
                    } 

                    else{
                    }
    
                }

                
            }

                bbNum2[botCount] =  bbNum[botCount]
                f = botCount



        }

    }
    else {
        document.getElementById("playerDiv").style.display = "none";
        document.getElementById("playerTitle").style.display = "none"
        document.getElementById("botTitle").style.display = "block"
        document.getElementById("guessDiv").style.display = "block"; 
        


        
    }
}

function cellClicked2(tablecell2) { // Called when a player clicks on a cell to attack
    var fire = tablecell2.id
    var alreadyClicked = false
    


    for (i=0; i<allshotsCount + 1 && alreadyClicked == false; i++) {
        if (fire == allshots[i] && playerTurn == false ) {
            alreadyClicked = true
        }

        else {
        }
    }

    if (hitcellnum < 15 && alreadyClicked == false && playerTurn == true) {
    
        var hit = false
        var m = 1


        for (i=0; i<5 && hit == false;i++){

            var j = bbNum[m]


            if( fire.substring(0,2) == j.substring(0,2) ){
                hit = true
            }   

            else if( fire.substring(0,2) == j.substring(2,4) ){
                hit = true
            }
                    
            else if( fire.substring(0,2) == j.substring(4,6) ){
                hit = true
            }
    
            else if( fire.substring(0,2) == j.substring(0,2) ){
                hit = true
            }
    
            else if( fire.substring(0,2) == j.substring(2,4) ){
                hit = true
            }
    
            else if( fire.substring(0,2) == j.substring(4,6) ){
                hit = true
            }
    
            else if( fire.substring(0,2) == j.substring(0,2) ){
                hit = true
            }

            else if( fire.substring(0,2) == j.substring(2,4) ){
                hit = true
            }
    
            else if( fire.substring(0,2) == j.substring(4,6) ){
                hit = true
            } 

            else{
            }
            m = m + 1
        }
        
        if (hit == true) {
            document.getElementById(fire).style.backgroundColor = "red"
            hitcellnum =  hitcellnum + 1
            firedatabase[hitcellnum] = fire
            document.getElementById("botSpeech").innerHTML = hitBotSpeech[Math.floor((Math.random() * hitBotSpeech.length) + 0)]
            document.getElementById("botImage").src = "angry.jpg"



            
        }

        else {
            document.getElementById(fire).style.backgroundColor = "white"
            document.getElementById("botSpeech").innerHTML = playerMissSpeech[Math.floor((Math.random() * playerMissSpeech.length) + 0)]
            document.getElementById("botImage").src = "evil.jpg"
        }

        allshotsCount = allshotsCount + 1
        allshots[allshotsCount] = fire
        playerTurn = false

    }
    else if (hitcellnum == 15){
        alert("You Win")
        document.getElementById(fire).style.backgroundColor = "red"
    }

    
 

}  // peter is cool !!!!!!!!

function botLoad(){
    document.getElementById("loadingGif").style.display = "block";
    document.getElementById("playerDiv").style.display = "block";
    document.getElementById("playerTitle").style.display = "block"
    document.getElementById("guessDiv").style.display = "none";
    document.getElementById("botTitle").style.display = "none";
    setTimeout(botGuess,Math.floor(Math.random(1000) * 3000))

}

function botGuess () { //The bot guesses where the players boats are. The majority of the code is in this function for the game.

   
    document.getElementById("loadingGif").style.display = "none"
    


    playerTurn = true
    var check = false
    var hit = false
    var botsunk = false
    var m = 1
    botSC1 = 0

    for (q=1;q<6;q++) { // check if boat is sunk by checking each cell of a boat and if all variables a, b and c all equal true then boat is sunk
        var a = false
        var b = false
        var c = false

        for (i=1; i<botfirecount+1; i++) {
            
            var j = botfirehistory[i]
            var l = boatNum [m]

            if( l.substring(0,2) == j ){
                a = true
            }  

            if( l.substring(2,4) == j ){
                b = true
            }  

            if( l.substring(4,6) == j ){
                c = true
            }  
        }

        if (a == true && b == true && c == true) {
            botSC1 = botSC1 + 1
        }
        m = m + 1
    }



    for (i=1; i<5; i++) { // Checks the last 4 shots and labels them as T/F (Hit / Miss)
        tfHistory[i] = false
    }

    m = 1

    for (q = 1; q < 6; q++) {
        var k = 3
        var h = 1

        for (i = 1; i < 5; i++) {

            var j = botfirehistory[botfirecount - k]
            var l = boatNum [m]


            if( l.substring(0,2) == j ){
                tfHistory[h] = true
            }  

            else if( l.substring(2,4) == j ){
                tfHistory[h] = true
            }
                    
            else if( l.substring(4,6) == j ){
                tfHistory[h] = true
            }

            k = k - 1
            h = h + 1

        }
        m = m + 1
    }

    if (botSC1 ==! botSC2) { //(Bot Sunk Count) Detects if the bot sunk a boat
        botsunk = true
    }

    botSC2 = botSC1

    
    if (tfHistory[1] == false && tfHistory[2] == false && tfHistory[3] == false && tfHistory[4] == false //Checks for every scenario of the bot guessing
       || tfHistory[1] == true && tfHistory[2] == true && tfHistory[3] == true && tfHistory[4] == false
       || tfHistory[1] == true && tfHistory[2] == false && tfHistory[3] == true && tfHistory[4] == true
       || tfHistory[1] == false && tfHistory[2] == true && tfHistory[3] == true && tfHistory[4] == true
       || tfHistory[1] == true && tfHistory[2] == true && tfHistory[3] == false && tfHistory[4] == false
       || tfHistory[1] == true && tfHistory[2] == true && tfHistory[3] == false && tfHistory[4] == true
       || tfHistory[1] == true && tfHistory[2] == false && tfHistory[3] == true && tfHistory[4] == false
       || tfHistory[1] == true && tfHistory[2] == true && tfHistory[3] == true && tfHistory[4] == true
       || botsunk == true 
       ) 
       {
        
        playerTurn = true;
        var fire = Math.floor((Math.random() * 99) + 0)
        var check = false
        var hit = false

            
        for (i=0;i<botfirecount+1;i++){ //Checks if this shot has already been done
            if (fire == botfirehistory[i]) {
                check = true
            }
        }


        if (fire < 10) {
            fire = "0" + fire
        }


        if (check == false) { //Determines if bot shot is a hit or a miss
                
            for (i=1; i<6; i++){

                var j = boatNum[i]
            
            
                if ( fire == j.substring(0,2) ){
                    hit = true
                }   
            
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                                
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
                
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
            
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                
                else if( fire == j.substring(4,6) ){
                    hit = true
                } 
            
                else{

                  

                }
            }
            


            if (hit == true) {
                document.getElementById(fire).style.backgroundColor = "red"
                document.getElementById("botSpeech").innerHTML = winningBotSpeech[Math.floor((Math.random() * winningBotSpeech.length) + 0)]
                document.getElementById("botImage").src ="happy.jpg"
                hits = hits + 1
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"
                document.getElementById("botSpeech").innerHTML = botMissSpeech[Math.floor((Math.random() * botMissSpeech.length) + 0)]
                document.getElementById("botImage").src ="sad.jpg"
            }
                
        }

        botfirecount = botfirecount + 1
        botfirehistory[botfirecount] = fire

    }

    else if (tfHistory[1] == false && tfHistory[2] == false && tfHistory[3] == false && tfHistory[4] == true) //Checks the scenario
    {

        check = false
        hit = false
            
        var random = Math.floor((Math.random() * 5) + 0)
            
        if (random == 1) { // Makes bot decisions random after it has hit
            fire = botfirehistory[botfirecount] - 1
        }
        else if (random == 2) {
            fire = botfirehistory[botfirecount] - - 1
        }
        else if (random == 3) {
            fire = botfirehistory[botfirecount] - 10
        }
        else if (random == 4) {
            fire = botfirehistory[botfirecount] - - 10
    
        }
        
        
        if (openLoop > 16) { // Failsafe, makes the bot do a random guess if something goes wrong
            fire =  Math.floor((Math.random() * 99) + 0)
        }

        if (fire<10) {
            fire = "0" +fire
        }
        
        for (i=0;i<botfirecount+1;i++){// Checks bot fire history
            if (fire == botfirehistory[i]) {
                check = true
            }
        }

        if (check == true) {
            openLoop = openLoop + 1
        }


        if (check == false) {

            openLoop = 0

            for (i=1; i<6; i++){// Checks if the bot shot is a hit or miss

                var j = boatNum[i]
            
            
                if ( fire == j.substring(0,2) ){
                    hit = true
                }   
            
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                                
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
                
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
            
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                
                else if( fire == j.substring(4,6) ){
                    hit = true
                } 
            
                else{
                }
            }

            if (hit == true) {
                document.getElementById(fire).style.backgroundColor = "red"

                document.getElementById("botSpeech").innerHTML = winningBotSpeech[Math.floor((Math.random() * winningBotSpeech.length) + 0)]
                document.getElementById("botImage").src ="happy.jpg"
                hits = hits + 1
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"
                
                document.getElementById("botSpeech").innerHTML = botMissSpeech[Math.floor((Math.random() * botMissSpeech.length) + 0)]
                document.getElementById("botImage").src ="sad.jpg"
            }

        botfirecount = botfirecount + 1
        botfirehistory[botfirecount] = fire

        }

        else {
            botGuess()
        }
    }

    else if (tfHistory[1] == false && tfHistory[2] == false && tfHistory[3] == true && tfHistory[4] == false ) 
    {
        hit = false
        check = false

        var random = Math.floor((Math.random() * 5) + 0)
            
        if (random == 1) {
            fire = botfirehistory[botfirecount-1] - 1
        }
        else if (random == 2) {
            fire = botfirehistory[botfirecount-1] - - 1
        }
        else if (random == 3) {
            fire = botfirehistory[botfirecount-1] - 10
        }
        else if (random == 4) {
            fire = botfirehistory[botfirecount-1] - - 10
        }
        
        if (openLoop > 16) {
            fire =  Math.floor((Math.random() * 99) + 0)
        }

        if (fire<10) {
            fire = "0" +fire
        }
        
        for (i=0;i<botfirecount+1;i++){
            if (fire == botfirehistory[i]) {
                check = true
            }
        }

        if (check == true) { // If check is true, this shot has already been taken
            openLoop = openLoop + 1
        }

        if (check == false) {

            openLoop = 0

            for (i=1; i<6; i++){

                var j = boatNum[i]
            
            
                if ( fire == j.substring(0,2) ){
                    hit = true
                }   
            
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                                
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
                
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
            
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                
                else if( fire == j.substring(4,6) ){
                    hit = true
                } 
            
                else{
                }
            }


            if (hit == true) { //If hit, cell becomes red. If miss, cell is white.
                document.getElementById(fire).style.backgroundColor = "red"

                document.getElementById("botSpeech").innerHTML = winningBotSpeech[Math.floor((Math.random() * winningBotSpeech.length) + 0)]
                document.getElementById("botImage").src ="happy.jpg"
                hits = hits + 1
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"
                document.getElementById(fire).style.backgroundColor = "white"
                document.getElementById("botSpeech").innerHTML = botMissSpeech[Math.floor((Math.random() * botMissSpeech.length) + 0)]
                document.getElementById("botImage").src ="sad.jpg"
            }

        botfirecount = botfirecount + 1
        botfirehistory[botfirecount] = fire

        }

        else {
            botGuess() // Recalls the function if shot has already been taken.
        }
    }

    else if (tfHistory[1] == false && tfHistory[2] == true && tfHistory[3] == false && tfHistory[4] == false) 
    {
        
        check = false 
        hit = false

        var random = Math.floor((Math.random() * 5) + 0) //Makes bot guess random
            
        if (random == 1) {
            fire = botfirehistory[botfirecount-2] - 1
        }
        else if (random == 2) {
            fire = botfirehistory[botfirecount-2] - - 1
        }
        else if (random == 3) {
            fire = botfirehistory[botfirecount-2] - 10
        }
        else if (random == 4) {
            fire = botfirehistory[botfirecount-2] - - 10
        }
        
        if (openLoop > 16) {
            fire =  Math.floor((Math.random() * 99) + 0)
        }
        
        if (fire<10) {
            fire = "0" +fire
        }

        for (i=0;i<botfirecount+1;i++){
            if (fire == botfirehistory[i]) {
                check = true
            }
        }

        if (check == true) {
            openLoop = openLoop + 1
        }

        if (check == false) {

            openLoop = 0
            if (check == false) {

                for (i=1; i<6; i++){
    
                    var j = boatNum[i]
                
                
                    if ( fire == j.substring(0,2) ){
                        hit = true
                    }   
                
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(0,2) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(0,2) ){
                        hit = true
                    }
                
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    } 
                
                    else{
                    }
                }
            }

            if (hit == true) {
                document.getElementById(fire).style.backgroundColor = "red"
                document.getElementById("botSpeech").innerHTML = winningBotSpeech[Math.floor((Math.random() * winningBotSpeech.length) + 0)]
                document.getElementById("botImage").src ="happy.jpg"
                hits = hits + 1
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"
                
                document.getElementById("botSpeech").innerHTML = botMissSpeech[Math.floor((Math.random() * botMissSpeech.length) + 0)]
                document.getElementById("botImage").src ="sad.jpg"
            }

        botfirecount = botfirecount + 1
        botfirehistory[botfirecount] = fire

        }

        else {
            botGuess()
        }
    }

    else if (tfHistory[1] == true && tfHistory[2] == false && tfHistory[3] == false && tfHistory[4] == false) 
    {  

        hit = false
        check = false
            
        var random = Math.floor((Math.random() * 5) + 0)
            
        if (random == 1) {
            fire = botfirehistory[botfirecount-3] - 1
        }
        else if (random == 2) {
            fire = botfirehistory[botfirecount-3] - - 1
        }
        else if (random == 3) {
            fire = botfirehistory[botfirecount-3] - 10
        }
        else if (random == 4) {
            fire = botfirehistory[botfirecount-3] - - 10
        }
        else {
            fire =  Math.floor((Math.random() * 99) + 0)
        }
        
        if (openLoop > 16) {
            fire =  Math.floor((Math.random() * 99) + 0)
        }

        if (fire<10) {
            fire = "0" +fire
        }
        
        for (i=0;i<botfirecount+1;i++){
            if (fire == botfirehistory[i]) {
                check = true
            }
        }

        if (check == true) {
            openLoop = openLoop + 1
        }

        if (check == false) {

            openLoop = 0

            if (check == false) {

                for (i=1; i<6; i++){
    
                    var j = boatNum[i]
                
                
                    if ( fire == j.substring(0,2) ){
                        hit = true
                    }   
                
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(0,2) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(0,2) ){
                        hit = true
                    }
                
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    } 
                
                    else{
                    }
                }
        }

            if (hit == true) {
                document.getElementById(fire).style.backgroundColor = "red"
                document.getElementById("botSpeech").innerHTML = winningBotSpeech[Math.floor((Math.random() * winningBotSpeech.length) + 0)]
                document.getElementById("botImage").src ="happy.jpg"
                hits = hits + 1
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"
                 
                document.getElementById("botSpeech").innerHTML = botMissSpeech[Math.floor((Math.random() * botMissSpeech.length) + 0)]
                document.getElementById("botImage").src ="sad.jpg"
            }

        botfirecount = botfirecount + 1
        botfirehistory[botfirecount] = fire

        }

        else {
            botGuess()
        }
    }

    else if (tfHistory[1] == true && tfHistory[2] == false && tfHistory[3] == false && tfHistory[4] == true) {
            
        check = false
        hit = false
            
        if (botfirehistory[botfirecount-3] == botfirehistory[botfirecount] - - 10) {
            fire = botfirehistory[botfirecount-3] - - 10
        }
        
        else if (botfirehistory[botfirecount-3] == botfirehistory[botfirecount] - 10) {
            fire = botfirehistory[botfirecount-3] - 10
        }

        else if (botfirehistory[botfirecount-3] == botfirehistory[botfirecount] - 1) {
            fire = botfirehistory[botfirecount-3] - 1
        }

        else if (botfirehistory[botfirecount-3] == botfirehistory[botfirecount] - - 1) {
            fire = botfirehistory[botfirecount-3] - -1
        }

        else {
            fire = Math.floor((Math.random() * 99) + 0)
        }


        if (openLoop > 16) {
            fire =  Math.floor((Math.random() * 99) + 0)
        }
        

        if (fire<10) {
            fire = "0" +fire
        }

        for (i=0;i<botfirecount+1;i++){
            if (fire == botfirehistory[i]) {
                check = true
            }
        }

        if (check == true) {
            openLoop = openLoop + 1
        }

        if (fire < 0) {
            for (i=1; i<5;i++) {
                hfHistory[i] = false
            }
        }


        if (check == false) {

            openLoop = 0

            for (i=1; i<6; i++){
    
                var j = boatNum[i]
                
                
                if ( fire == j.substring(0,2) ){
                    hit = true
                }   
                
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                                    
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                    
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
                    
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                    
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                    
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
                
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                    
                else if( fire == j.substring(4,6) ){
                    hit = true
                } 
                
                else{
                }
            }
            

            if (hit == true) {
                document.getElementById(fire).style.backgroundColor = "red"
                document.getElementById("botSpeech").innerHTML = winningBotSpeech[Math.floor((Math.random() * winningBotSpeech.length) + 0)]
                document.getElementById("botImage").src ="happy.jpg"
                hits = hits + 1                    
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"
                document.getElementById("botSpeech").innerHTML = botMissSpeech[Math.floor((Math.random() * botMissSpeech.length) + 0)]
                document.getElementById("botImage").src ="sad.jpg"
            }
            
            botfirecount = botfirecount + 1
            botfirehistory[botfirecount] = fire
        }

        else {
            botGuess()
        }
    }

    else if (tfHistory[1] == false && tfHistory[2] == true && tfHistory[3] == false && tfHistory[4] == true) {

        check = false
        hit = false 
            
        if (botfirehistory[botfirecount-2] == botfirehistory[botfirecount] - 10) {
            fire = botfirehistory[botfirecount] - - 10
        }
        
        else if (botfirehistory[botfirecount-2] == botfirehistory[botfirecount] - - 10) {
            fire = botfirehistory[botfirecount] - 10
        }

        else if (botfirehistory[botfirecount-2] == botfirehistory[botfirecount] - 1) {
            fire = botfirehistory[botfirecount] - - 1
        }

        else if (botfirehistory[botfirecount-2] == botfirehistory[botfirecount] - - 1) {
            fire = botfirehistory[botfirecount] - 1
        }

        else {
            fire = Math.floor((Math.random() * 99) + 0)
        }
        
        if (openLoop > 16) {
            fire =  Math.floor((Math.random() * 99) + 0)
        }
        
        if (fire<10) {
            fire = "0" +fire
        }


        for (i=0;i<botfirecount+1;i++){
            if (fire == botfirehistory[i]) {
                check = true
            }
        }

        if (check == true) {
            openLoop = openLoop + 1
        }

        if (check == false) {

            openLoop = 0
            if (check == false) {

                for (i=1; i<6; i++){
    
                    var j = boatNum[i]
                
                
                    if ( fire == j.substring(0,2) ){
                        hit = true
                    }   
                
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(0,2) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(0,2) ){
                        hit = true
                    }
                
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    } 
                
                    else{
                    }
                }
            }

            if (hit == true) {
                document.getElementById(fire).style.backgroundColor = "red"
                document.getElementById("botSpeech").innerHTML = winningBotSpeech[Math.floor((Math.random() * winningBotSpeech.length) + 0)]
                document.getElementById("botImage").src ="happy.jpg"
                hits = hits + 1      
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"
                document.getElementById("botSpeech").innerHTML = botMissSpeech[Math.floor((Math.random() * botMissSpeech.length) + 0)]
                document.getElementById("botImage").src ="sad.jpg"
            }

            botfirecount = botfirecount + 1
            botfirehistory[botfirecount] = fire

        }

        else {
            botGuess()
        }
    }

    else if (tfHistory[1] == false && tfHistory[2] == false && tfHistory[3] == true && tfHistory[4] == true) {

        check = false
        hit = false
            
        if (botfirehistory[botfirecount-1] == botfirehistory[botfirecount] - 10) {
            fire = botfirehistory[botfirecount] - - 10
        }
        
        else if (botfirehistory[botfirecount-1] == botfirehistory[botfirecount] - - 10) {
            fire = botfirehistory[botfirecount] - 10
        }

        else if (botfirehistory[botfirecount-1] == botfirehistory[botfirecount] - 1) {
            fire = botfirehistory[botfirecount] - - 1
        }

        else if (botfirehistory[botfirecount-1] == botfirehistory[botfirecount] - - 1) {
            fire = botfirehistory[botfirecount] - 1
        }

        else {
            fire = Math.floor((Math.random() * 99) + 0)
        }

        if (openLoop > 16) {
            fire =  Math.floor((Math.random() * 99) + 0)
        }

        if (fire<10) {
            fire = "0" +fire
        }

        for (i=0;i<botfirecount+1;i++){
            if (fire == botfirehistory[i]) {
                check = true
            }
        }

        if (check == true) {
            openLoop = openLoop + 1
        }

        if (check == false) {

            openLoop = 0

            for (i=1; i<6; i++){
    
                var j = boatNum[i]
                
                
                if ( fire == j.substring(0,2) ){
                    hit = true
                }   
                
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                                    
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                    
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
                    
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                    
                else if( fire == j.substring(4,6) ){
                    hit = true
                }
                    
                else if( fire == j.substring(0,2) ){
                    hit = true
                }
                
                else if( fire == j.substring(2,4) ){
                    hit = true
                }
                    
                else if( fire == j.substring(4,6) ){
                    hit = true
                } 
                
                else{
                }
            }
            

            if (hit == true) {
                document.getElementById(fire).style.backgroundColor = "red"
                document.getElementById("botSpeech").innerHTML = winningBotSpeech[Math.floor((Math.random() * winningBotSpeech.length) + 0)]
                document.getElementById("botImage").src ="happy.jpg"
                hits = hits + 1 
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"
                document.getElementById("botSpeech").innerHTML = botMissSpeech[Math.floor((Math.random() * botMissSpeech.length) + 0)]
                document.getElementById("botImage").src ="sad.jpg"
            }

            botfirecount = botfirecount + 1
            botfirehistory[botfirecount] = fire
        }
    
        else {
        botGuess()
        }
    
    }

     else if (tfHistory[1] == false && tfHistory[2] == true && tfHistory[3] == true && tfHistory[4] == false) {
        
        check = false
        hit = false
            
        if (botfirehistory[botfirecount-2] == botfirehistory[botfirecount-1] - 10) {
            fire = botfirehistory[botfirecount-2] - 10
        }
        
        else if (botfirehistory[botfirecount-2] == botfirehistory[botfirecount-1] - - 10) {
            fire = botfirehistory[botfirecount-2] - - 10
        }

        else if (botfirehistory[botfirecount-2] == botfirehistory[botfirecount-1] - 1) {
            fire = botfirehistory[botfirecount-2] - 1
        }

        else if (botfirehistory[botfirecount-2] == botfirehistory[botfirecount-1] - - 1) {
            fire = botfirehistory[botfirecount-2] - - 1
        }

        if (openLoop > 16) {
            fire =  Math.floor((Math.random() * 99) + 0)
        }
        
        if (fire<10) {
            fire = "0" +fire
        }

        for (i=0;i<botfirecount+1;i++){
            if (fire == botfirehistory[i]) {
                check = true
            }
        }
        
        if (check == true) {
            openLoop = openLoop + 1
        }

        if (check == false) {

            if (check == false) {

             openLoop = 0

                for (i=1; i<6; i++){
    
                    var j = boatNum[i]
                
                
                    if ( fire == j.substring(0,2) ){
                        hit = true
                    }   
                
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(0,2) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(0,2) ){
                        hit = true
                    }
                
                    else if( fire == j.substring(2,4) ){
                        hit = true
                    }
                    
                    else if( fire == j.substring(4,6) ){
                        hit = true
                    } 
                
                    else{
                    }
                }
            }

            if (hit == true) {
                try {
                    document.getElementById(fire).style.backgroundColor = "red"
                    document.getElementById("botSpeech").innerHTML = winningBotSpeech[Math.floor((Math.random() * winningBotSpeech.length) + 0)]
                document.getElementById("botImage").src ="happy.jpg"
                } catch {
                    console.log(fire)
                }
                hits = hits + 1    
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"
                document.getElementById("botSpeech").innerHTML = botMissSpeech[Math.floor((Math.random() * botMissSpeech.length) + 0)]
                document.getElementById("botImage").src ="sad.jpg"
            }

            botfirecount = botfirecount + 1
            botfirehistory[botfirecount] = fire

        }

        else {
            botGuess()
        }
    }

    else {

    }

    
}