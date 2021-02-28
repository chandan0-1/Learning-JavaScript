var temp = 0;

function Tog(){
    if (temp == 0){
        document.bgColor = "#313131";
        text.style.color="white";
        ball.style.margin="0px 0px 0px 50px";
        temp = 1;
    }
    
    else{
        document.bgColor = "white";
        text.style.color="black";
        ball.style.margin="0px";
        temp = 0;
        }
    };
    
    
var toggle = document.getElementById("container");
toggle.addEventListener("click",Tog);
var text = document.getElementById("Text");
var Ball = document.getElementById("ball");
