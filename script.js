const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");

//showerrpr
function error(input, message) {
   const formControl = input.parentElement;
   formControl.className = "form-control error";
   const small=formControl.querySelector('small');
   small.innerText=message;
}

//show success
function success(input) {
    const formControl=input.parentElement;
    formControl.className="form-control success";

}




//email
function isValidEmail(){
    const regex =
       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

       return regex.test(String(email).toLowerCase());

}










//event listeners
form.addEventListener("submit", function (e) {
   e.preventDefault();
   if (username.value === "") {
      error(username, "username is required");
   } else {
      success(username, "");
   }
//    email
if (email.value === "") {
      error(email, "email is required");
}
      else if(!isValidEmail(email.value)){
        error(email,'email is invalid')
      }
   else {
      success(email, "");
   }
//    password
if (password.value === "") {
      error(password, "password is required");
   } else {
      success(password, "");
   }
});


