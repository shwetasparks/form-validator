const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");

//showerrpr
function error(input, message) {
   const formControl = input.parentElement;
   formControl.className = "form-control error";
   const small = formControl.querySelector("small");
   small.innerText = message;
}

//show success
function success(input) {
   const formControl = input.parentElement;
   formControl.className = "form-control success";
}

//email
function isValidEmail(input) {
   const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(regex.test(input.value.trim())){
      showSuccess(input);
   }else(
      error(input,'email is not valid')
   )
  
}
//check required
function checkRequired(inputArr) {
   inputArr.forEach(function (input) {
      if (input.value === "") {
         error(input, `${uppercaseField(input)} is required`);
      } else {
         success(input);
      }
   });
}
//check length
function checkLength(input,min,max){
   if(input.value.length<min){
      error(input,`${fieldName(input)} must be ${min} char required`)
   }
   else if(input.value.length>max){
      error(input,`${fieldName(input)} must be less than ${max} char required`)
   }
   else success(input)

}



//field name to uppercase
function uppercaseField(input) {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listeners
form.addEventListener("submit", function (e) {
   e.preventDefault();
   checkRequired([username, email, password]);
   checkLength([username, 3, 15]);
   checkLength([password, 8, 15]);
   checkEmail(email);

   //    if (username.value === "") {
   //       error(username, "username is required");
   //    } else {
   //       success(username, "");
   //    }
   // //    email
   // if (email.value === "") {
   //       error(email, "email is required");
   // }
   //       else if(!isValidEmail(email.value)){
   //         error(email,'email is invalid')
   //       }
   //    else {
   //       success(email, "");
   //    }
   // //    password
   // if (password.value === "") {
   //       error(password, "password is required");
   //    } else {
   //       success(password, "");
   //    }
});
