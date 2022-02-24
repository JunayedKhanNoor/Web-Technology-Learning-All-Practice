document.getElementById("submitButton").addEventListener("click", function () {
  //console.log("Button Clicked");
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  // console.log(userEmail);
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  // console.log(userPassword);
  if (userEmail == "abba@gmail.com" && userPassword == "abba") {
    //console.log("Valid User");
    //eita hoilo javascript diya onno page a jaowar upai "javascript button click to another page"
    window.location.href = "banking.html";
  }
});
