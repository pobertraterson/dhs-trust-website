document.getElementById("referenceFail").style.display = "none";
document.getElementById("nhsFail").style.display = "none";
function formatChecking() {
    var referenceNumber = document.getElementById("reference"); 
    var referenceValue = referenceNumber.value;
    console.log('Reference number is', referenceValue);
    var nhsNumber = document.getElementById("nhsNumber"); 
    var nhsValue = nhsNumber.value;
    console.log('NHS Number is', nhsValue);
    console.log(isInteger(referenceValue));
    console.log(isInteger(nhsValue));
    incorrectFormat(referenceValue, nhsValue);
}
function isInteger(value) {
    return /^\d+$/.test(value);
}
function incorrectFormat(refValue, nhsnValue) {
    console.log(isInteger(refValue));
    console.log(isInteger(nhsnValue));
    if (Boolean(isInteger(refValue)) == false) {
        document.getElementById("reference").style.borderColor = "red";
        document.getElementById("referenceFail").style.display = "block";
    }
    if (Boolean(isInteger(nhsnValue)) == false) {
        document.getElementById("nhsNumber").style.borderColor = "red";
        document.getElementById("nhsFail").style.display = "block";
    }
}