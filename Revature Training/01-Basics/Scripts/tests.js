/* dataTypes:
    number, string, boolean, object, undefined, NaN

//Variables
var x; //Global variables
x = 10;
y = 5.00;
z = "Hello World!";
//console.log(x);

//Scope - Global vs Local

//Hoisting - function call is made even before declaration
test(10);
function test(a) {
    console.log(a);
}

// IIFE (Immediately Invoked Function Expression)
(function test2(a) {
    console.log(a);
})(10);

//Function expressions
var funcResult = function t(b) {
    console.log(b);
}
funcResult(10);
*/

/*
Callback function
function agree(policyAcceptance, yes, no) {
    debugger;
    if (confirm(policyAcceptance)){
        yes();
    }
    else {
        no();
    }
}
function showOk () {
    alert("Policy is accepted!");
}
function showNotOk () {
    alert("Policy is denied!");
}
agree("Do you agree to our policy?", showOk, showNotOk);
*/

/*
//Default param
 var res = function add(a, b, c=10) {
     return a + b + c;
 }
 console.log(res(10, 3));
*/

/*
function Outer() {
    var outerData = "outerData";
    function inner() {
        alert(outerData);
    }
    return inner;
}

var add = function() {
    debugger;
    var counter = 0;
    return function() {
        counter+=1;
        return counter;
    }
})();
console.log(add());
console.log(add()); */

//Arrow Functions (basically lambda expressions)
//() => alert("Hi");
//console.log(((a,b)=>(a*b))(5,3));

/*
//Returns entire function
function returnValue() {
    return 'Hello World!';
}
var functionItself = returnValue;
alert(functionItself);

//Returns result of function
function returnValue() {
    return 'Hello World!';
}
var functionItself = returnValue();
alert(functionItself);
*/

/*
(function varLet() {
    //var is function scoped (anything within the same function)
    //let is block scoped (anything within the current set of { })
    //console.log('before declaration ' + i);
    for (let i = 0; i < 5; i++) {
        console.log('after initialization ' + i);
    }
    console.log('outside for loop but within the function ' + i); //var would allow access but let won't
})();
console.log('outside function ' + i);
*/

/*
var i = 'hello';
let i = 10; //Not allowed because i is already declared
*/

/*
//Arrays
'use strict'
let x = []; //Empty array
x = [1, 2, 3, 4, 'Greg', null, false];

for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

x.forEach(function(e) {
    console.log(e);
})
*/

/*
//Type Coersion/Conversion
var i = 10, j = 'Hello';
j = Boolean(NaN);
console.log(j);
*/


//Objects
/*
var obj = {}; //Empty object
obj = {
    name:'Greg Hadjiyane',
    profession:'Full Stack Java Developer',
    sayDetails:function() {
        return this.name + ' - ' + obj.profession; //Both 'this' and 'obj' reference the same thing in this case
    }
}
obj.height = '182';
obj.color = 'Brown';
obj['company'] = 'Revature';
console.log(obj.sayDetails() + ' ' + obj['height'] + ' ' + obj['company']);

var obj2 = {
    course:'Java',
    duration:'10 weeks',
    sayDetails2:obj.sayDetails
}
obj2.sayDetails2();
*/

//Constructors in ES6
/*
function Person(name, city) {
    this.name = name;
    this.city = city;
    this.sayDetails = function () {
        console.log(this.name + ' - ' + this.city);
    }
}
//this.profession = 'Full Stack Java Dev';
let objGreg = new Person('Greg', 'New York City');
objGreg.sayDetails();

function Student(name, age, city, school) {
    this.school = school;
    this.age = age;
    this.__proto__ = new Person(name, city);
}
let objStudent = new Student('Greg', 25, 'NYC', 'CUNY');
objStudent.sayDetails();
*/

/*
class PersonClass {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    sayDetails () {
        console.log(this.name + ' - ' + this.city);
    }
}

class StudentClass extends PersonClass {
    constructor(name, age, city, fingers) {
        super(name, age, city);
        this.fingers = fingers;
    }
}
let student = new StudentClass('Joe', 50, 'Miami', 12);
student.sayDetails();
*/


