/*var name='vusqa'
name='rafique'
console.log(name)

var name = null;
var nationality = "Mark";
nationality = null;
console.log(nationality)

var name = "Mark";
name = undefined;
console.log(name)

var name;
var age;
console.log(age)

var score = 80;
if( score > 80 ) {
console.log("Grade A");
} else if( score > 70 ) {
console.log("Grade B");
} else if( score > 60 ) {
console.log("Grade C");
} else {
console.log("Failed");
}


var input = "M";
if(input == "A" || input == "E" || input == "I"
|| input == "O" || input == "U"){
console.log("It's a Vowel");
}
else {
console.log("It's a consonants");
}

var age = 45;
// 45 will be converted to true, if will be executed
if(age){
console.log("In If Age = "+age);
}
else{
console.log("In else Age = "+age);
}

var name = null;
//null will be converted to false, else will be executed
if(name){
console.log("In If name = "+name);
}
else{
console.log("In else name = "+name);
}

var name; // Default value is undefined
//it will be converted to false, else will be executed
if(name){
console.log("In If name = "+name);
}
else{
console.log("In else name = "+name);
}

var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods[1]); // Burger
foods[1] = "Sandwich"; // Updating existing element
console.log(foods[1]); // Sandwich
foods[3] = "French Fries"; // Adding 1 more element
console.log(foods[3]); // French Fries


var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods.length); // 3
var arr = [];
console.log(arr.length); // 0
*/

/*var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log(foods)

alert(foods[0]); // Pizza
alert(foods[1]); // Burger
alert(foods[2]); // Snacks*/


//Push function -- Multiple input

/*var foods = [];
foods.push("Pizza");
foods.push("Burger", "Snacks");// Will add in sequence
foods.push("Sandwich");
console.log(foods);
alert(foods[0]); // Pizza
alert(foods[1]); // Burger
alert(foods[2]); // Snacks
alert(foods[3]); // Sandwich
*/
// accessing array using loop
/*var foods = ["Pizza", "Burger", "Snacks"];
for(var i=0;i<foods.length;i++){
alert(foods[i]);
}*/


//random access
/*var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods[1]); // Burger
foods[1] = "Sandwich"; // Updating existing element
console.log(foods[1]); // Sandwich
*/

//Stack(Last in First out)-----Push function will add element at the end in array
// Pop function will remove and return last elements fromarray
/*var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log("Length "+foods.length); // Length 3
console.log(foods.pop()); // Remove Snacks from array
console.log(foods.pop()); // Remove Burger from array
console.log("Length "+foods.length); // Length 1
*/

//Queue(First in First out)------Push function will add element at the end in array
// Shift function will remove and return first elements from array
/*var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log(foods);
console.log("Length "+foods.length); // Length 3
console.log(foods.shift());// Remove Pizza from array
console.log(foods.shift());// Remove Burger from array
console.log("Length "+foods.length); // Length 1
*/


//Unshift function----If you want to add element at the start of array and move all
//element one index ahead then we can we use unshift function
/*var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log(foods);
console.log("Length "+foods.length); // Length 3
console.log(foods[0]); // "Pizza"
foods.unshift("Sandwich");
console.log(foods[0]); // "Sandwich"
console.log(foods[1]); // "Pizza"
console.log(foods);
*/

/*
//Splice function------If we want to add element in middle of array or any index
//other than first/last then we can use splice function
//-----Example 1-------
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods);// "Pizza","Burger","Snacks"
foods.splice(1,0,"Sandwich");
console.log(foods);
//"Pizza","Sandwich", "Burger","Snacks"

//----Example 2----
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods);// "Pizza","Burger","Snacks"
foods.splice(1,0,"Sandwich", "Fries");
console.log(foods);
//"Pizza","Sandwich","Fries","Burger","Snacks"

//-------Example 3------
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods);// "Pizza","Burger","Snacks"
foods.splice(1,2,"Sandwich");//this will remove elements from index 2-1 to ownward
console.log(foods);
//"Pizza","Sandwich"
*/

//-----Slice function----To create array from element of existing array you can use slice function
//------Example 1----- start index is always the same number but end index is given index - 1 
/*var foods = ["Pizza", "Burger", "Snacks", "Sandwich",
"Fries"];
console.log(foods);//
"Pizza","Burger","Snacks","Sandwich","Fries"
var arr = foods.slice(2); // Just start index ending index is not mentioned
console.log(foods);// output same as above
console.log(arr); //"Snacks", "Sandwich","Fries"

//------Example 2----
var foods = ["Pizza", "Burger", "Snacks", "Sandwich",
"Fries"];
console.log(foods);//
"Pizza","Burger","Snacks","Sandwich","Fries"
var arr = foods.slice(1,3); //1 is starting index and 3-1 is end index
console.log(foods);// output same as above
console.log(arr); //"Burger","Snacks"
*/

//----String-----
/*var a = "Hello World";
alert(a.length); //length of string

//-----Escape Charater------
var a = "Hello\'World"; // Single quote
var b = "Hello\"World"; // Double quote
var c = "Hello\\World"; // Backslash
var d = "Hello\nWorld"; // New Line
var e = "Hello\tWorld"; // Horizontal Tab
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//-----date-----
var date = new Date();
console.log(date);

//----Unix time----
var date = new Date();
date.getTime();
console.log(date.getTime());
*/


//-----Function------
/*function multiply(num1, num2){
    var num3 = num1 * num2;
    console.log("Num3 ",num3);
    }
    multiply(3,6);
    multiply(4,2);
//----function return-----
//---Example 1-----
function test(){
}
var a = test(); // return undefined
console.log(a); // undefined

//-----Example 2----
function test1(){
    return 45;
    }
    var b= test1(); // return 45
    console.log(b); // 45

//----local & global variable----
    var a = 7; // Global Variable
    function sum(){
    var a = 6; // Local Variable a same name as global
    a = 3 + 2; // Local a variable will be affected
    console.log("A= "+a);//5, access local variable
    }
    sum();
    console.log("A= "+a);//7, access global variable
//------arguments passed by value------
var num = 5;
function changeValue(a){
a = 7; // change to a will not affect num
}
changeValue(num);
console.log(num);//5,
*/

//------Switch Statement-----
/*var day = 3;
switch (day) {
case 6:
console.log("Today is Saturday");
break;
case 0:
console.log("Today is Sunday");
break;
default:
console.log("Looking forward to the Weekend");
}
*/

//-----Example 2-----Switch - Grouping of case
/*var day = 0;
switch (day) {
case 6: // No break
console.log("Today is Saturday");
case 0: // No break in last case, both will execute
console.log("Today is Sunday");
break;
default:
console.log("Looking forward to the Weekend");
}

//------Example 3----
var day = 6;
switch (day) {
case 6:
case 0:
console.log("Yaaaa! It’s Weekend");
break;
default:
console.log("Looking forward to the Weekend");
}

//-----Switch - Strict Comparison----Switch cases use strict comparison (===).
var x = "0";
switch (x) {
case 0:
console.log("Off");
break;
case 1:
console.log("On");
break;
default: // this will execute as value did not match
console.log("No value found");
}

//-----While loop-----
var i;
while (i < 10) {
    console.log("I " + i);
    i++;
    }
    */