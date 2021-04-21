"use strict";

var fullname = document.getElementById("F_Name");
var emailbox = document.getElementById("email");
var adrBox = document.getElementById("adr");
var cityBox = document.getElementById("city");
var stateBox = document.getElementById("state");
var zipBox = document.getElementById("zip");
var category = document.getElementById("cats");
var pname = document.getElementById("model2");



fullname.value = sessionStorage.getItem('FirstName');
emailbox.value = sessionStorage.getItem('Email');
adrBox.value = sessionStorage.getItem('Street');
cityBox.value = sessionStorage.getItem('Sub_Tow');
stateBox.value = sessionStorage.getItem('State');
zipBox.value = sessionStorage.getItem('Zip');
category.value = sessionStorage.getItem('Category');
pname.value = sessionStorage.getItem('Model');

function cardtyp() {
    var card1 = document.getElementById('cardtyp');
    var card2 = document.getElementById('ccum');
    errMsg = '';
    result = true;


    if (card1=="Visa" && !card2.match(/^4[0-9]{15}$/)) {
        errMsg += "A Visa card number must start with 4 and have 16 digits. \n";
        result  = false;
      }
      else if (card1=="Mastercard" && !card2.match(/^5[1-5][0-9]{14}$/)) {
        errMsg += "A Mastercard card number must start with 51 through to 55 and have 16 digits. \n";
        result = false;
      }
      else if (card1=="Amex" && !card2.match(/^3[47][0-9]{13}$/)) {
        errMsg += "An American Express card number must start with 34 or 37 and have 15 digits. \n";
        result = false;
      }
      if (errMsg != "") {
        alert(errMsg);
    }
    return result;  
}
