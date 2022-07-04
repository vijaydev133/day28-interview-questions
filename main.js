/**************************************************************************** */
//1. How do invoke function?
//Ans) if a function is without a return, then we can invoke it normally.
//ex: myName()
//if a function is with return then we can invoke it and store it in a variable.
//ex: let name = myName()

/**************************************************************************** */
// 2. Difference between break and continue.
//Ans) Break will terminate the loop, when the loop seen the break
// while continue will just skip that loop, and continue the looping

/**************************************************************************** */
// 3. Function types with example.
//Ans) *Named Function
// which will be called using the name itself
//ex: function myName(){
//    console.log("vijay")
//}

//*Anonymous Function
//which will have no name, it will be assigned to variable, and the function will invoked,
// by the variable name
//ex: let myName = function(){
//    console.log("vijay")
//} 

//*Immediately invoked function
//which will invoked immediately using "()"
//ex: function myName(){
//    console.log("vijay")
//}()

/**************************************************************************** */
// 4. String methods with example
//Ans)* length
//let name = "Vijay"
//name.length;

//*slice
// let name = "Vijay"
//name.slice(1,2)

//*replace
// let name = "My name is ajay"
//name.replace("ajay","vijay")

//*toUpperCase
// let name = "Vijay"
//name.toUpperCase()

//*toLowerCase
// let name = "Vijay"
//name.toLowerCase()
/**************************************************************************** */
// 5. Difference between replace and replace all with example.
// replace will replace the first occurence
//const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(p.replace('dog', 'monkey'));

// replaceall will replace the first occurence
//const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(p.replaceall('dog', 'monkey'));

/**************************************************************************** */
// 6. Ternary operator

//function getFee(isMember) {
//     return (isMember ? '$2.00' : '$10.00');
// }

// console.log(getFee(true));
// console.log(getFee(false));

/**************************************************************************** */