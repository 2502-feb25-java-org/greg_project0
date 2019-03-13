'use strict'
/*
var title = document.getElementById("title");
title.innerText = "Home Page";

var lis = document.getElementsByTagName("li");
console.log(lis);
// lis.forEach(li => {
    
// });
*/

//This won't work until the body element is loaded in the DOM tree
//document.body.style.backgroundColor = "grey";


//Window object is the global object and all global variables/objects fall under Window
/*
function loadWindow() {
    document.body.style.backgroundColor = "green";
}
Window.onload = loadWindow();
*/

//on<eventname> </eventname>
/*
window.addEventListener('load', () => {
    document.body.style.backgroundColor = "indigo";
    //let header = document.getElementById("header1");
    let header = document.querySelector("h1");
    header.textContent = "DOM API changed the header";
});
*/

/*
window.addEventListener('DOMContentLoaded', () => {
    var table = document.getElementByID("the_table");
    var tblAttr = table.attributes;
    for (let i = 0; i < tblAttr.length; i++) {
        if (tblAttr[i].nodeName.toLowerCase() == "border") {
            table.border = "5px";
            table.border = "solid";
        }
    }
});
*/



function storeSearch() {
    var searchBox = document.getElementById("searchBox").value;
    alert(searchBox);
    localStorage.search = searchBox;
}

function loadSearch() {
    var searchBox = document.getElementById("searchBox");
    searchBox.value = localStorage.search;
}