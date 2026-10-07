


//Lecture 1-3
const name="Isra khan";
console.log("My Name is"+name);


name="Ali khan"; // can't be possible you can't reassign a value to a constant variable


let lastName="Ali khan"; // you can reassign a value to a let variable
console.log("My Last Name is"+lastName);

//function


function myName(firstName,lastName){
    return firstName+" "+lastName;

}
myName("Isra","Khan");

//these are simple function now let's try anynomous functions

studentInfo=function(name,rollNo){
    return name+" "+rollNo;
}
studentInfo("Isra",1234); // this is how we start now it can be more short

studentInfo=(name,rollNo)=>{
    return name+" "+rollNo;
}// so we can remove the function keyword and use arrow function

studentInfo=(name,rollNo)=> name+" "+rollNo; // now we can remove the return keyword and curly braces

info=()=>"Hello World"; // now we can remove the parameters and return a string if we don't have any parameters
info(); // this is how we call the function
//lecture 3 ends here