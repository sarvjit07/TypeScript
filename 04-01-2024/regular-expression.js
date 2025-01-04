var pattern = /\+91\d{10}/;
var mobile = "+919874561232";
if (mobile.match(pattern)) {
    console.log("Sucess..");
}
else {
    console.log("Invalid Mobile");
}
