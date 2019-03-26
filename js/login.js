// Original project from https://www.formget.com/javascript-login-form/

// Set the max number of attempts
// Note that the count starts after the first time the validation is run
// so if the max number is 2, then the user gets 3 tries
var attempt = 2;

// Validate the submitted credentials when the button is clicked
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "ops" && password == "sudo_ICS") {
    alert("Welcome " + username + "!");
    window.location = "lights.html"; // Redirecting to other page.
    return false;
  } else if (attempt > 1) {
    alert("Incorrect credentials. You have " + attempt + " attempts remaining.");
  } else if (attempt == 1) {
    alert("Incorrect credentials. You have " + attempt + " attempt remaining.");
  } else if (attempt == 0) {
    // The user only needs to refresh the page to restart the counter
    alert("You have exceeded the allowed number of attempts and the account is now locked.");
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
  }
  attempt--;
}