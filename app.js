// console.log('Hello from external js file')

// console.log('Hello from js')
//document.getElementById('txt').innerHTML = 'This is for p element'


//Variables

var a = 'Rahul'
var b = 3
console.log(a)
console.log(a, b)

var flag = true;
console.log(flag)


var arr = [1, 2, 3, 4, 'Ramesh', true, { name: 'Kartik' }];

console.log(arr)

//JSON ===> JavaScript Object Notation

var samplejson = {
    name: "Rahul",
    age: 30,
    address: {
        addressline1: "Wakad",
        addressline2: "Pune"
    }
}

console.log(samplejson)


//DataTypes

// String ---> Text and numbers and Special Chars 
// Number ---> 0-9
// Boolean ---> True False 
// Object ---> 
// undefined  it is a value and a data type
// null

console.log(typeof 'Rahul');
console.log(typeof "Ramesh")
console.log(typeof 3)
console.log(typeof true)

console.log(typeof {})  //--- JSON

console.log(typeof [])  // Array

console.log(typeof undefined)



//Conditional Statements

// 1. If
// 2. If else
// 3. if elseif else
// 4. switch
// 5. Nested if

var score = 78;

/**
 * 
 * if Syntax
 * 
 * if(condition){
 * 
 * }
 * 
 */


if (score > 60) {
    console.log('Passed')
}
else {
    console.log('Failed')
}



if (score >= 80) {
    console.log('Passed with A Grade')
}
else if (score >= 60) {
    console.log('Passed with B Grade')
}
else {
    console.log('Passed with C Grade')
}


var age = 18;

var isIdPresent = false;

if (age >= 18) {
    if (isIdPresent) {
        console.log('You can enter')
    }
    else {
        console.log('Please enter your id')
    }
}
else {
    console.log('You cannot enter since your is ' + age);
}


//Switch

// {} ===> Curly Braces 
// [] ==> Square Bracket

var day = 0;

switch (day) {
    case 0:
        console.log('It is Sunday')
        break;
    case 1:
        console.log('It is Monday')
        break;
    case 2:
        console.log('It is Tuesday')
        break;
    case 3:
        console.log('It is Wednesday')
        break;
    default:
        console.log('Please enter vaild number');
}
console.log('After Switch')



//Functions ---> 

// () ==> paranthesis
//Definition of the Function
function sample(num) {

    num = num * 3;
    console.log('Salary is ' + num);

    console.log('Inside function');

}



let salary = 21000;

//Calling of the function
sample(salary);  // Argurment

function factorial(n){

    if(n===0 || n===1 ){
        return 1;
       
    } else {
        return n * factorial(n-1);
    }
}
let num = 0;
let fact = factorial(num);
console.log('Factorial of '+ num +' is ' + fact);

/**
 * 
 *  '='  ==> Assignment Operator
 *  '==' ==> Compares two values
 *  '===' ===> Compares two values and their datatypes
 * 
 * 
 * 
 */

var value = 3;
var anvalue = '3';


// if(value == anvalue){
//     console.log('Both are same')
// }


// if(value === anvalue){
//     console.log('Both are same')
// }else{
//     console.log('Both are differnet')
// }



// function factorial(n){
    
//     for()
// }