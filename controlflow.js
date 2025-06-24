
//1.if-else

let age = 18;
if (age < 18){
    console.log("you are a Minor");
} else if(age >=18 && age < 65) {
    console.log("you are Major");
}
else {
    console.log("you are a senior citizen");
}
console.log("\n")

//Switch-Case 
let day = 3;
switch(day) {
case 1:
    console.log("Sunday");
    break;
case 2:
    console.log("Monday");
    break;
case 3:
    console.log("Tuesday");
    break;
case 4:
    console.log("Wednesday");
    break;
case 5:
    console.log("Thursday");
    break;
case 6:
    console.log("Friday");
    break;
case 7:
    console.log("Saturday");
    break;
default:
    console.log("Invalid");
    break;
    }

console.log("\n");
//3.Loops
console.log("For loop");
for (let i=0;i<5;i++)
{
    console.log("For loop iteration",i);
}
console.log("\n")
console.log("While Loop")
let j = 0;
while (j<5){
    console.log("While loop iteration :",j);
    j++;
}
console.log("\n")
console.log("Do-While");
let k = 0;
do {
    console.log("Do-While iteration :",k);
    k++;
}while(k > 5);