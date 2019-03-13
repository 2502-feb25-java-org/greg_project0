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
function storeuName() {
    var uName = document.getElementById("uName").value;
    localStorage.uName = uName;
}
function storepWord() {
    var pWord = document.getElementById("pWord").value;
    localStorage.pWord = pWord;
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
    isAdmin();
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
    isAdmin();
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

//Drawing the Canvas
function draw() {
    isAdmin();
    let canvas = document.getElementById("gameCanvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        let raf;
        let running = false;
        //Angles are in radians, not degrees
        //To convert: radians = (Math.PI/180)*degrees
        
        //Creating some test Tangram shapes
        /*
        let smallTriangle = {
            x: 0,
            y: 0,
            color: 'blue',
            draw: function() {

            }
        }
        */

        //Small Triangle 1
        let smallTriangle1 = new Path2D();
        smallTriangle1.moveTo(125, 125);
        smallTriangle1.lineTo(250, 250);
        smallTriangle1.lineTo(375, 125);

        //Small Triangle 2
        let smallTriangle2 = new Path2D();
        smallTriangle2.moveTo(500, 500);
        smallTriangle2.lineTo(500, 250);
        smallTriangle2.lineTo(375, 375);

        //Square
        let square = new Path2D();
        square.moveTo(250, 250);
        square.lineTo(375, 375);
        square.lineTo(500, 250);
        square.lineTo(375, 125);

        //Medium Triangle
        let mediumTriangle = new Path2D();
        mediumTriangle.moveTo(250, 0);
        mediumTriangle.lineTo(500, 250);
        mediumTriangle.lineTo(500, 0);

        //Parallelogram
        let parallelogram = new Path2D();
        parallelogram.moveTo(0, 0);
        parallelogram.lineTo(125, 125);
        parallelogram.lineTo(375, 125);
        parallelogram.lineTo(250, 0);

        //Large Triangle 1
        let largeTriangle1 = new Path2D();
        largeTriangle1.moveTo(0, 0);
        largeTriangle1.lineTo(0, 500);
        largeTriangle1.lineTo(250, 250);

        //Large Triangle 2
        let largeTriangle2 = new Path2D();
        largeTriangle2.moveTo(0, 500);
        largeTriangle2.lineTo(500, 500);
        largeTriangle2.lineTo(250, 250);

        //Filling all of the shapes
        ctx.fillStyle = 'red';
        ctx.fill(smallTriangle1);
        ctx.save();
        ctx.fillStyle = 'blue';
        ctx.fill(smallTriangle2);
        ctx.save();
        ctx.fillStyle = 'yellow';
        ctx.fill(square);
        ctx.fillStyle = 'purple';
        ctx.fill(mediumTriangle);
        ctx.fillStyle = 'green';
        ctx.fill(parallelogram);
        ctx.restore();
        ctx.fill(largeTriangle1);
        ctx.restore();
        ctx.fill(largeTriangle2);
        ctx.save();
    }
}