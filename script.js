// function display(){
    // alert("Hello Everyone");
// }

let element ;

document.getElementById("inhead").addEventListener("mouseleave", abc);

document.getElementById("footer").addEventListener("mouseleave", xyz);

document.getElementById("headtext1").addEventListener("click",zxy1);
document.getElementById("headtext2").addEventListener("click",zxy2);
document.getElementById("headtext3").addEventListener("click",zxy3);
document.getElementById("headtext3").addEventListener("click",zxy3);
document.getElementById("headtext4").addEventListener("click",zxy4);

function abc() {
    document.getElementById("inhead").style.background = "rgb(23, 34, 34)";
}

function xyz() {
    document.getElementById("footer").style.background ="rgb(23, 34, 34)";
}

function zxy1(){
    document.getElementById("headtext1").style.color ="blue";
}
function zxy2(){
    document.getElementById("headtext2").style.color ="blue";
}
function zxy3(){
    document.getElementById("headtext3").style.color ="blue";
}
function zxy4(){
    document.getElementById("headtext4").style.color ="blue";
}