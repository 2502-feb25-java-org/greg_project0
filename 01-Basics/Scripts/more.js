"use strict"
console.log("first run");

var add = function(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

var addToNested = add(5); //
var addToInnerMost = addToNested(6); //
console.log(addToInnerMost(7));

add(5)(6)(7);//Currying process

//Status Reports
//1xx - Informational
//2xx - Success
//3xx - Redirectional
//4xx - Bad Response (error in code)
//5xx - Server Error
var requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var xhr = new XMLHttpRequest;
xhr.onreadystatechange = function() {
    if((this.readyState == 4) && (this.status == 200)) {
        console.log(xhr, this.readyState);
    }
}
xhr.open('GET', requestURL, true);//by default async is true
xhr.send();