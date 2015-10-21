
$(function(){
var connection = localStorage.getItem("connection");
if (connection == "true"){
def = true;
}
else if (connection === null){
def = false;
}
else {def = false;}
var connected = def;
if (connected){
	location.href="index.html#homepage";
}
else{location.href="index.html#signinpage";} 

var username1;
var password1;
var password2;

$('#signupbtn').click(function(){
if($('#username1').val() !== "" && $('#password1').val() !=="" && $('#password2').val() !== ""){
if($('#username1').val().length > 5){
if($('#password1').val().length > 7 || $('#password2').val().length > 7){
if($('#password2').val() == $('#password1').val()){
username1 = $('#username1').val();
password1 = sha256_digest($('#password1').val());
localStorage.setItem("username",JSON.stringify(username1));
localStorage.setItem("password",JSON.stringify(password1));
$('#username1').val("");
$('#password1').val("");
$('#password2').val("");
swal("Signup Successful!","","success");
setTimeout(
  function()
  {
    location.href="#signinpage";
  }, 1000);

}
else{swal("Password doesn't Match", "", "error");}
}
else{swal("Password minimum is 8", "", "error");}
}
else {swal("Username minimum is 6", "", "error");}
}
else{swal("Please complete the Form", "", "error");}
});


$('#loginbtn').click(function(){
var loginusername = JSON.parse(localStorage.getItem("username"));
var loginpassword = JSON.parse(localStorage.getItem("password"));
if (loginusername == $('#username').val() && loginpassword == sha256_digest($('#password').val())){
connected = true;
swal("Welcome","","success");
localStorage.setItem("connection", JSON.stringify(connected));
location.href="#homepage";
$('#username').val("");
$('#password').val("");
}
else{
swal("Wrong Username and/or Password","","error");
}

});
$('#logoutbtn').click(function(){
swal({
title: "Logout?",
type: "warning",
showCancelButton: true,
confirmButtonColor: "#DD6B55",
confirmButtonText: "Yes",
closeOnConfirm: false},
function(){
location.href="#signinpage";
swal("You are now Logged Off", "", "success");
connected = false;
localStorage.setItem("connection", JSON.stringify(connected));

});	
});
$('body').find('.ui-btn-active').removeClass('ui-btn-active ui-focus');
FastClick.attach(document.body);

// $('#closehomepanel').click(function(){
// $('#homepanel').panel("close");
// });
// $('#closeprofilepanel').click(function(){
// $('#profilepanel').panel("close");
// });
// $('#closefirstrimesterpanel').click(function(){
// $('#firstrimesterpanel').panel("close");
// });
// $('#closesecondtrimesterpanel').click(function(){
// $('#secondtrimesterpanel').panel("close");
// });
// $('#closethirdtrimesterpanel').click(function(){
// $('#thirdtrimesterpanel').panel("close");
// });
// $('#closepregnancyjournalpanel').click(function(){
// $('#pregnancyjournalpanel').panel("close");
// });
// $('#closeappointmentpanel').click(function(){
// $('#appointmentpanel').panel("close");
// });
// $('#closesettingspanel').click(function(){
// $('#settingspanel').panel("close");
// });

});
