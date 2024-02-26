alert("Welcome to Guessing Number");
const max = prompt("Enter max-number");

let guss = prompt("Guess a number");

 const num = Math.floor(Math.random()*max)+1;
 
 while (true){
if(guss== "quit"){
    console.log("Error");
    break;
}
if(num==guss){
    console.log(" congratulation");
    break;
}

 if(num>guss){
    guss = prompt("ur input is small try big"); 
}
if(num<guss){
    guss = prompt("ur input is big try small");

}
}
 