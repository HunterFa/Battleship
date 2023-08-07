





var test = document.getElementById("manualImage")

document.getElementById("mainDiv").style.display = "block"
document.getElementById("centreButtons").style.display = "block"
document.getElementById("manualImage").style.display = "none"


function manualShow(){

    document.getElementById("mainDiv").style.display = "none"
    document.getElementById("centreButtons").style.display = "none"
    document.getElementById("manualDiv").style.display = "block"
    //document.getElementById("manualClose").style.display = "block"


}

function manualHide(){

    document.getElementById("mainDiv").style.display = "block"
    document.getElementById("centreButtons").style.display = "block"
    document.getElementById("manualImage").style.display = "none"
    //document.getElementById("manualClose").style.display = "none"


}
