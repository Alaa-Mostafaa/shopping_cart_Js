// sign up variables
const signUp_name = document.getElementById("signUp_name");
const signUp_email = document.getElementById("signUp_email");
const signUp_password = document.getElementById("signUp_password");
// Login variables
const login_email = document.getElementById("login_email");
const login_password = document.getElementById("login_password");

var users;
if (localStorage.getItem("userss") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("userss"));
}

// This function is used to allow user to sign up
function signup() {
  // Error if any field is empty
  if (signUp_name.value == "") {
    document.getElementById("name-error").style.display = "flex";
  } else if (signUp_email.value == "") {
    document.getElementById("email-error").style.display = "flex";
  } else if (signUp_password.value == "") {
    document.getElementById("password-error").style.display = "flex";
  } else {
    // Verify that the email is in the array before registration occurs.
    const emailExists = users.some((user) => user.email === signUp_email.value);
    if (emailExists) {
      document.getElementById("signUp_account").style.display = "flex";
    } else {
      // Add new user
      let user = {
        username: signUp_name.value,
        email: signUp_email.value,
        password: signUp_password.value,
      };
      console.log(user);
      users.push(user);
      users = localStorage.setItem("userss", JSON.stringify(users));
      window.location.assign("login.html");
    }
  }
}

// This function is used to allow user to Log in
function login() {
  // Error if any field is empty
  if (login_email.value == "") {
    document.getElementById("login_em").style.display = "flex";
  } else if (login_password.value == "") {
    document.getElementById("login_pass").style.display = "flex";
  } else {
    // If all fields are not empty
    const emailExists = users.some((user) => user.email === login_email.value);
    // Verify that the email is in the array before Login occurs.
    if (emailExists) {
      users.forEach((element) => {
        if (element.email === login_email.value) {
          if (element.password === login_password.value) {
            localStorage.setItem("user_email", login_email.value);
            showMessage();
          } else {
            // Check for password
            document.getElementById("login_pass").style.display = "flex";
            document.getElementById("login_pass").innerHTML =
              "Password is not true";
          }
        }
      });
    } else {
      // If the user is not signned up
      document.getElementById("account_isnotExist").style.display = "flex";
    }
  }
}

// This function is used to logout
function logout() {
  localStorage.removeItem("user_email");
  window.location.assign("login.html");
}

// This function is used to show welcome message after the used is logged in then redirect him to home page
function showMessage() {
  // Show the message
  document.getElementById("login_message").style.display = "flex";
  // Hide the message after 2 seconds
  setTimeout(() => {
    document.getElementById("login_message").style.display = "none";
    // Redirect to home page
    window.location.assign("index.html");
  }, 2000);
}
