var boatRotation = 1 //Type 1 = vertical Type 2 = horizontal 
var boatPos;
var boatCount = 0
var boatNum = []
var boatNum2 = ["0","0","0","0","0"]
var botCount = 0;
var bbNum = [];
var bbNum2 = ["0","0","0","0","0","0"]
var submitt = false
var hitcellnum = 0
var firedatabase = []
var allshots = []
var allshotsCount = 0
var playerTurn = true
var botfirehistory = []
var botfirecount = 1
var botLastShot = []
var botHitCount = 0
var hits = 0
var hitcheck1 = 0
var hitcheck2 = 0
var peter = 0

document.getElementById("guessDiv").style.display = "none"

document.addEventListener("keydown", function (e){
    if (e.keyCode === 82) {

        rotateShip();
        
    }
});

function rotateShip(){
    if (boatRotation !== 1 ){
        boatRotation = 1
        
    } else{
        boatRotation = 2
    }
    //alert(boatRotation)
}


function cellClicked(tablecell){

    //alert(tablecell.id)
    var boatPos = tablecell.id //position of center cell of boat
    var boatPosTop = boatPos - 10
    var boatPosBottom = boatPos - - 10
    var boatPosLeft = boatPos - 1
    var boatPosRight = boatPos - - 1
    var invalid = false
    
    if (boatCount<5) {
        boatCount = boatCount + 1

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


    alert (boatNum[boatCount])



    } else 

        if (boatRotation == 2 && (boatPos.substring(1, 2)!=="9" && (boatPos.substring(1, 2)!=="0")) && boatPos!=="9" && boatPos!=="0" && invalid == false){ // horizontal object
        //alert(tablecell.id)
            document.getElementById(boatPos).style.backgroundColor = "grey"
            document.getElementById(boatPosLeft).style.backgroundColor = "grey"
            document.getElementById(boatPosRight).style.backgroundColor = "grey"
            alert (boatNum[boatCount])



        } else 
            { alert("invalid")
            boatNum[boatCount] = 0   
            boatNum2[boatCount] = "0"
            boatCount = boatCount - 1

        }

        function shipParameters(){
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

function submit() {
    if (boatCount == 5 && submitt == false) {
        document.getElementById("playerDiv").style.display = "none"
        document.getElementById("guessDiv").style.display = "block"

        submitt = true
        
        for (f = 1; f<6; f++) {
            var botBoatPos= Math.floor((Math.random() * 99) + 0) //position of center cell of boat
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

            if (botRotation == 1 && (botBoatPos.substring(0, 1)!== "0") && (botBoatPos.substring(0, 1)!=="9") && bInvalid == false ){ //vertical object 
                document.getElementById(botPosTop + "a").style.backgroundColor = "brown"
                document.getElementById(botBoatPos + "a").style.backgroundColor = "brown"
                document.getElementById(botPosBottom + "a").style.backgroundColor = "brown"
                alert (bbNum[botCount])

                
        
            } else 
        
            if (botRotation == 2 && (botBoatPos.substring(1, 2)!=="9" && (botBoatPos.substring(1, 2)!=="0")) && botBoatPos!=="9" && botBoatPos!=="0" && bInvalid == false){ // horizontal object
                document.getElementById(botPosLeft + "a").style.backgroundColor = "brown"
                document.getElementById(botBoatPos + "a").style.backgroundColor = "brown"
                document.getElementById(botPosRight + "a").style.backgroundColor = "brown"
                alert (bbNum[botCount])

        
        
        
            } 
            else {         
                alert("invalid")
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
        document.getElementById("guessDiv").style.display = "block";
    }
}

function cellClicked2(tablecell2) {
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
        }

        else {
            document.getElementById(fire).style.backgroundColor = "white"
        }

        allshotsCount = allshotsCount + 1
        allshots[allshotsCount] = fire
        playerTurn = false

    }
    else if (hitcellnum == 14){
        alert("You Win")
    }
 

}  


function botGuess () {
    if (hits<15) {
        var l = 0
        var hit = false

        for (i=1; i<botfirecount; i++){
            botLastShot[i] = botfirehistory[botfirecount - l] 
            l = l + 1
        }

        for (i=1; i<6; i++){

            var j = boatNum[i]
            var h = botLastShot [1]
            
            if ( h == j.substring(0,2) ){
                hit = true
            }   
            
            else if( h == j.substring(2,4) ){
                hit = true
            }
                                
            else if( h == j.substring(4,6) ){
                hit = true
            }
            
            else if( h == j.substring(0,2) ){
                hit = true
            }
                
            else if( h == j.substring(2,4) ){
                hit = true
            }
                
            else if( h == j.substring(4,6) ){
                hit = true
            }
                
            else if( h == j.substring(0,2) ){
                hit = true
            }
            
            else if( h == j.substring(2,4) ){
                hit = true
            }
                
            else if( h == j.substring(4,6) ){
                hit = true
            } 

        }

        
        if (hit == true ) {
            hitBoatGuess ()
        }
        else {
            randomGuess ()

        }
    
    }

    else if (hits == 15) {
        alert("Bot Wins")
    }

}



function hitBoatGuess () {

    var random = Math.floor((Math.random() * 4) + 1)
    var check = false;
    var hit = false
    
    if (random == 1) {
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

    for (i=0;i<botfirecount+1;i++){
        if (fire == botfirehistory[i]) {
            check = true
        }
    }
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

        if (hit == true) {
            document.getElementById(fire).style.backgroundColor = "red"
            hits = hits + 1
            peter = 0
        }

        else {
            document.getElementById(fire).style.backgroundColor = "white"
            peter = 0
        }
        
        botfirecount = botfirecount + 1
        botfirehistory[botfirecount] = fire
    }
    else if (peter < 5){
        peter = peter + 1
        hitBoatGuess ()
    }

    else {
        randomGuess ()
    }

    document.getElementById("playerDiv").style.display = "block";
    document.getElementById("guessDiv").style.display = "none";
}




function randomGuess () {
    
    playerTurn = true;
    var fire = Math.floor((Math.random() * 99) + 0)
    var check = false
    var hit = false

        
    for (i=0;i<botfirecount+1;i++){
        if (fire == botfirehistory[i]) {
            check = true
        }


        if (fire < 10) {
            fire = "0" + fire
        }


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

            if (hit == true) {
                document.getElementById(fire).style.backgroundColor = "red"
                hits = hits + 1
                
            }

            else {
                document.getElementById(fire).style.backgroundColor = "white"

            }
            
            botfirecount = botfirecount + 1
            botfirehistory[botfirecount] = fire

        }

        else {
            randomGuess()
        }

        document.getElementById("playerDiv").style.display = "block";
        document.getElementById("guessDiv").style.display = "none";
    }
}