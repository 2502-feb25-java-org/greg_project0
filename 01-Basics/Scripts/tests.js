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

