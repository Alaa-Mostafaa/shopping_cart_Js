// sign up variables
const signUp_name = document.getElementById("signUp_name");
const signUp_email = document.getElementById("signUp_email");
const signUp_password = document.getElementById("signUp_password");
// Login variables 
const login_email=document.getElementById('login_email');
const login_password=document.getElementById('login_password');

var users;
if (localStorage.getItem("userss") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("userss"));
}

function signup() {
  if (signUp_name.value == "") {
    document.getElementById("name-error").style.display = "flex";
  } else if (signUp_email.value == "") {
    document.getElementById("email-error").style.display = "flex";
  } else if (signUp_password.value == "") {
    document.getElementById("password-error").style.display = "flex";
  } else {

    const emailExists=users.some(user=>user.email === signUp_email.value);
    if(emailExists){
      document.getElementById('signUp_account').style.display="flex"
    }else{
      let user = {
        username: signUp_name.value,
        email: signUp_email.value,
        password: signUp_password.value,
      };
      console.log(user);
      users.push(user);
      users = localStorage.setItem("userss", JSON.stringify(users));
      window.location.assign('login.html')

    }
      }
}

console.log(users);

function login(){
    if(login_email.value == ""){
        document.getElementById("login_em").style.display  = "flex";

    }else if(login_password.value == ""){
        document.getElementById("login_pass").style.display = "flex";
    
      }else{
        const emailExists=users.some(user=>user.email === login_email.value);
            if(emailExists){
              users.forEach(element => {
                if(element.email === login_email.value){
                  if(element.password === login_password.value){
                    localStorage.setItem('user_email',login_email.value)
                    window.location.assign('index.html')
                  }else{
                    console.log("Password is not true")
                    document.getElementById("login_pass").style.display = "flex";
                    document.getElementById('login_pass').innerHTML="Password is not true"
                  }
                }
              });
            }else{
                document.getElementById('account_isnotExist').style.display='flex'
            }
    }
}


function logout(){
  localStorage.removeItem('user_email')
  window.location.assign('login.html');
}