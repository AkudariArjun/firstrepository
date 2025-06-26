document.title="Dom in JavaScript";
document.getElementById("header").innerHTML = "Death";
document.getElementById("header").style.color = "blanchedalmond";
document.getElementById("para").innerHTML = "NOTE";
document.body.style.backgroundColor = "lightgreen";
document.getElementById("para").style.color= "Red";
document.getElementById("para").style.fontSize="30px";
let a = document.getElementsByClassName("class")[0];
a.style.color="green";
a.style.backgroundColor="beige";
a.style.fontSize="30px";

let ele = document.querySelectorAll(".eb");
ele[0].style.color = "Red";
ele[1].style.color = "Green";
ele[2].style.color = "BLue";

function changeBackground() {
document.body.style.backgroundColor


}
function changeBackground( ){
    if (document.body.style.backgroundColor==="lightgreen") {
        document.body.style.backgroundColor="skyblue";
    }
    else if(document.body.style.backgroundColor==="skyblue") {
        document.body.style.backgroundColor="Orange";
    }
    else {
    document.body.style.backgroundColor="lightgreen";
    }
}
function changeText(){
    document.getElementById("clg").innerHTML ="At MSGUDA";
    document.getElementById("clg").style.color ="coral" ;
    document.getElementById("clg").style.fontSize ="30px";
    document.getElementById("clg").style.backgroundColor="white";
    document.getElementById("clg").style.textAlign ="center";
    document.getElementById("clg").style.border = "solid black";
    //document.getElementById("clg")
    
}

// function changeBackground(){
//     if (document.body.style.backgroundColor == "Red" ) {
//         document.body.style.backgroundColor = "Green";
//      }
//     else if (document.body.style.backgroundColor == "Green" ) {  
//         document.body.style.backgroundColor = "Blue"; }
//       else
//     {  document.body.style.backgroundColor = "Red"; }
//         }
    