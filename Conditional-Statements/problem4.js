// Given stored username and password and input username and password, Print if the user can log in or not.


let reg_username = "abc123@gmail.com";
let reg_pass = "abc@123";

let ip_username = "abc123@gamil.com";
let ip_pass = "abc@123";

if (ip_username == reg_username) {
  if (ip_pass == reg_pass) {
    console.log("Login Successfull")
  }
  else {
    console.log("Password is incorrect")
  }
}

else if (ip_username != reg_username) {
  console.log("Please enter valid username")
}

else {
  console.log("Something is going wrong, please try later")
}