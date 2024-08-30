const dispaly= document.getElementById("display")

function addToScreen(x){
    dispaly.value += x;
}

function calculate(){
    try{
        dispaly.value=eval(dispaly.value)
    }catch(error){
        console.error(error)
        dispaly.value="Error"
    }
    
}
function clearScreen(){
    dispaly.value=""
}
const opp=document.getElementsByClassName("opperator")
opp[opp.length-1].style.backgroundColor="hsl(5,60%,60%)"
console.log(opp[opp.length-1])

