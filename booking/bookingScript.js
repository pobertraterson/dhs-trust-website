var referenceNumber = document.getElementById("reference"); 
var referenceValue = referenceNumber.value;
var nhsNumber = document.getElementById("nhsNumber"); 
var nhsValue = nhsNumber.value;
var referenceFailing = Boolean(isInteger(referenceValue));
var nhsFailing = Boolean(isInteger(nhsValue));

function isInteger(value) {
    return /^\d+$/.test(value);
}

function formatChecking() {
    onloading();
}

function onloading() {
    if (referenceFailing === false) {
        document.getElementById("referenceFail").style.display = "block";
    } else {
        document.getElementById("referenceFail").style.display = "none";
    }
    if (nhsFailing === false) {
        document.getElementById("nhsFail").style.display = "block";
    } else {
        document.getElementById("nhsFail").style.display = "none";
    }
}