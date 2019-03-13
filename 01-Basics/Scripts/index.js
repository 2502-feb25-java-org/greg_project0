//Comment like this
//alert("Hello World!");
"use strict"

//Storage Functions
function storefName() {
    var fName = document.getElementById("fName").value;
    localStorage.fName = fName;
    reButton();
}
function storelName() {
    var lName = document.getElementById("lName").value;
    localStorage.lName = lName;
    reButton();
}
function storeGender() {
    var gender = document.getElementsByName("gender");
    if(gender[0].checked) {
        localStorage.gender = gender[0].value;
    }
    else if(gender[1].checked) {
        localStorage.gender = gender[1].value;
    }
    else {
        localStorage.gender = gender[2].value;
    }
    reButton();
}
function storeAge() {
    var age = document.getElementById("age").value;
    localStorage.age = age;
    reButton();
}
function storePhone() {
    var phone = document.getElementById("phone").value;
    localStorage.phone = phone;
    reButton();
}
function storeeMail() {
    var eMail = document.getElementById("eMail").value;
    localStorage.eMail = eMail;
    reButton();
}
function storeAddr1() {
    var addr1 = document.getElementById("addr1").value;
    localStorage.addr1 = addr1;
    reButton();
}
function storeAddr2() {
    var addr2 = document.getElementById("addr2").value;
    localStorage.addr2 = addr2;
    reButton();
}
function storeZip() {
    var zip = document.getElementById("zip").value;
    localStorage.zip = zip;
    reButton();
}
function storeState() {
    var state = document.getElementById("state").value;
    localStorage.state = state;
    reButton();
}

//Load Functions
/*
function loadfName() {
    var fName = document.getElementById("fName");
    fName.value = localStorage.fName;
}
*/
function loadfName() {
    if(localStorage.fName) {
        document.getElementById("fName").value = localStorage.fName;
    }
}
function loadlName() {
    if(localStorage.lName) {
        document.getElementById("lName").value = localStorage.lName;
    }
}
function loadGender() {
    var gender = document.getElementsByName("gender");
    if(localStorage.gender == gender[0].value ) {
        gender[0].checked = true;
    }
    else if(localStorage.gender == gender[1].value ) {
        gender[1].checked = true;
    }
    else {
        gender[2].checked = true;
    }
}
function loadAge() {
    if(localStorage.age) {
        document.getElementById("age").value = localStorage.age;
    }
}
function loadPhone() {
    if(localStorage.phone) {
        document.getElementById("phone").value = localStorage.phone;
    }
}
function loadeMail() {
    if(localStorage.eMail) {
        document.getElementById("eMail").value = localStorage.eMail;
    }
}
function loadAddr1() {
    if(localStorage.addr1) {
        document.getElementById("addr1").value = localStorage.addr1;
    }
}
function loadAddr2() {
    if(localStorage.addr2) {
        document.getElementById("addr2").value = localStorage.addr2;
    }
}
function loadZip() {
    if(localStorage.zip) {
        document.getElementById("zip").value = localStorage.zip;
    }
}
function loadState() {
    if(localStorage.state) {
        document.getElementById("state").value = localStorage.state;
    }
}

function isFirstVisit() {
    return localStorage.hasVisited;
}

function loadSignUp() {
    if (!isFirstVisit()) {
        loadfName();
        loadlName();
        loadGender();
        loadAge();
        loadPhone();
        loadeMail();
        loadAddr1();
        loadAddr2();
        loadZip();
        loadState();
        reButton();
    }
    else {
        localStorage.hasVisited = true;
    }
}

function loadContact() {
    if (!isFirstVisit()) {
        loadfName();
        loadlName();
        loadeMail();
        reButton();
    }
    else {
        localStorage.hasVisited = true;
    }
}

//Info Checks and Validation
function deButton() {
    if(document.getElementById("submitSignUp")) {
        document.getElementById("submitSignUp").disabled = true;
    }
}
function reButton() {
    if(document.getElementById("submitSignUp")) {
        document.getElementById("submitSignUp").disabled = false;
    }
}

function infoCheck() {
    deButton();
    let t = document.getElementById("infoMessage");
    if(!localStorage.fName) {
        t.innerText = "Please fill in your first name";
    }
    if(!localStorage.lName) {
        //alert('Please fill in your last name');
        t.innerText = "Please fill in your last name";
    }
    if(!localStorage.age) {
        //alert('Please fill in your age');
        t.innerText = "Please fill in your age";
    }
    if(!localStorage.phone) {
        //alert('Please fill in your phone number');
        t.innerText = "Please fill in your phone number";
    }
    if(!localStorage.eMail) {
        //alert('Please fill in your email address');
        t.innerText = "Please fill in your email address";
    }
    if(localStorage.fName == localStorage.lName) {
        //alert('Your first name cannot be the same as your last name');
        t.innerText = "Your first name cannot be the same as your last name";
    }
}

//User Login and Admin Login
function isAdmin() {
    if((localStorage.uName == "admin") && (localStorage.pWord == "password123")) {
        document.getElementById("gamePage").style = "display:contents;";
    }
    else {
        document.getElementById("gamePage").style = "display:none;";
    }
}