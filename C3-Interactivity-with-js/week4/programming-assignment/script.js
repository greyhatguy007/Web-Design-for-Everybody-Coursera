/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
    if (document.getElementById('same').checked) {
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    } else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
    return;
}