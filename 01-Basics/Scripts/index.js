//Comment like this
//alert("Hello World!");

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

//Load Functions
function loadfName() {
    var fName = document.getElementById("fName");
    fName.value = localStorage.fName;
}
function loadlName() {
    var lName = document.getElementById("lName");
    lName.value = localStorage.lName;
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
    var age = document.getElementById("age");
    age.value = localStorage.age;
}
function loadPhone() {
    var phone = document.getElementById("phone");
    phone.value = localStorage.phone;
}
function loadeMail() {
    var eMail = document.getElementById("eMail");
    eMail.value = localStorage.eMail;
}

function loadEntries() {
    loadfName();
    loadlName();
    loadGender();
    loadAge();
    loadPhone();
    loadeMail();
    reButton();
}

//Info Checks and Validation
function deButton() {
    var b = document.getElementById("submit");
    b.disabled = true;
}
function reButton() {
    var b = document.getElementById("submit");
    b.disabled = false;
}

function infoCheck() {
    deButton();
    var t = document.getElementById("infoMessage");
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