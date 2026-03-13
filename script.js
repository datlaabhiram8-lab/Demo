document.getElementById("feedbackForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;

document.getElementById("message").innerHTML =
"Thank you " + name + "! Your feedback has been submitted.";

});
