"use strict";

// Validate Quantity 

function qty() {
    var errMsg = "";
    var result = true;
    var quantity1 = document.getElementById('quantity1').value;
    

     if(!quantity1.match(/^[1-9]+$/)) {
         errMsg = errMsg + "Quantity must be greater than 1";
         result = false;
        }
     
        if (errMsg != "") {
         alert(errMsg);
     }
     return result;  
}

//Postcode and State
function statecode() {
    var estateselect = document.getElementById('State').value;
    var errmsg = '';
    var result = true;
    var zip = document.getElementById("Postcode").value;


    if(estateselect === "Please Select") {
        errmsg = errmsg + "Please choose a state";
        result = false;
    }
    else if(estateselect == "VIC" && !zip.match(/^3|^8/)) {
        errmsg = errmsg + " Zip for VIC starts with 3 or 8";
        result = false;
    }
    else if(estateselect == "NSW" && !zip.match(/^1|^2/)) {
       errmsg = errmsg + " Zip for NSW starts with 1 or 2";
       result = false;
    }
    else if(estateselect == "QLD" && !zip.match(/^4|^9/)) {
       errmsg = errmsg + " Zip for QLD starts with 4 or 9";
       result = false;
    }
    else if(estateselect == "NT" && !zip.match(/^0/)) {
       errmsg = errmsg + " Zip for NT starts with 0";
       result = false;
    }
    else if(estateselect == "WA" && !zip.match(/^6/)) {
       errmsg = errmsg + " Zip for WA starts with 6";
       result = false;
    }
    else if(estateselect == "SA" && !zip.match(/^5/)) {
       errmsg = errmsg + " Zip for SA starts with 5";
       result = false;
    }
    else if(estateselect == "TAS" && !zip.match(/^7/)) {
       errmsg = errmsg + " Zip for TAS starts with 7";
       result = false;
    }
    else if(estateselect == "ACT" && !zip.match(/^0/)) {
       result = false;
    }
    if (errmsg != "") {
        alert(errmsg);
    }
    return result; 

}
    
//  Data Transfer to Session Storage

 function datatrans() {
     var box1 = document.getElementById("F_Name").value;
     sessionStorage.setItem("FirstName", box1);

     var box2 = document.getElementById("L_Name").value;
     sessionStorage.setItem("LastName", box2);

     var box3 = document.getElementById("email").value;
     sessionStorage.setItem("Email", box3);

     var box4 = document.getElementById("Street_A").value;
     sessionStorage.setItem("Street", box4);
    
     var box5 = document.getElementById("S_T").value;
     sessionStorage.setItem("Sub_Tow", box5);

     var box6 = document.getElementById("State").value;
     sessionStorage.setItem("State", box6);

     var box7 = document.getElementById("Postcode").value;
     sessionStorage.setItem("Zip", box7);
     
     var box8 = document.getElementById("cost1").value;
     sessionStorage.setItem("Cost", box8);

     var box9 = document.getElementById("cat").value;
     sessionStorage.setItem("Category", box9);
     
     var box10 = document.getElementById("model1").value;
     sessionStorage.setItem("Model", box10);
 }

 function pcost() {
    var model = document.getElementById('model12');
    var errmsg = '';
    var result = true;

    if(model == 'Choose a Category') {
        errmsg = errmsg + " Choose a Model to purchase";
        result = false;
    }
    else if( model == 'Yamaha R1') {
        
    }
    if (errmsg != "") {
        alert(errmsg);
    }
    return result;
     
 }

  
// Calling Functions 

function init() {
    var enqForm = document.getElementById("enqform");

    enqForm.onsubmit = qty;
    enqForm.onsubmit = datatrans;
    enqForm.onsubmit = statecode;
    enqForm.onsubmit = pcost;
}
window.onload = init;
