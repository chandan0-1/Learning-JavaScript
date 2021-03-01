var clicked = document.getElementById("box");
clicked.addEventListener("click",helper);

var c = 0;

function helper(){
    c++;
    document.getElementById("output").innerHTML = c;
}
