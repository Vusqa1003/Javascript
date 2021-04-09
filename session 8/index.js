
//-------lexical scope-------
function func1() {
    var userName = 'John';
    // likes is not accessible here
    function parent() {
    // userName is accessible here
    // likes is not accessible here
    function child() {
    // Innermost level of the scope chain
    // userName is also accessible here
    var likes = 'Coding';
    }
  }
}

//-------let & const-------
//--Example 1:--
/*if (true){
const age = 1;
let cool = true;
var myAge = 23;
}
console.log(myAge);//Output 23 // var is accessible because var is a function scope.
console.log(cool);//Output Uncaught ReferenceError: cool is not defined
console.log(age);//Output Uncaught ReferenceError: age is not defined


//--Example 2:--
if (true){
    const age = 1;
    let cool = true;
    var myAge = 23;
    console.log(cool);
    console.log(myAge);

    }
    console.log(myAge);


// --Eample 3: Function Scope-- 
function isCool(name){
if (true){
const cool = true;
}
console.log(cool);
}
isCool('Vusqa');
//Output Uncaught ReferenceError: cool is not defined*/

//--Example 4:
/*const dog = 'snickers';
function logDog(){
console.log(dog);
}
function go(){
const dog = 'sunny';
logDog();
}
go();

//--Example 5:--
const dog = 'snickers';
function logDog(dog){
console.log(dog);
}
function go(){
const dog = 'sunny';
logDog(dog);
}
go();*/

// --Example 6:Function Scope nested--
/*function sayHi(){
    function yell(){
    console.log('hello');
    }
    yell()
    }
    sayHi()

//-------Hoisting-------
//--EXAMPLE 1:--
greeting();
function greeting(){
console.log('hey');
}    

//--Example 2:--
a();
function a(){
console.log('hey');
console.log(add(1,2));
}
function add (a, b){
return a + b;
}
*/

//--Example 3:--
// Hoisting works with regular function not other than that: Example Below
sayHi();
var add2 = function(a, b){
return a + b;
}
function sayHi(){
console.log('hey');
console.log(add2(1,2));
}
// OUTPUT add2 is not a function




