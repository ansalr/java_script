function onlyNumberKey(evt) {
 

  let ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}
function checkAlphabets(event) {
      if ((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32))
        return true;
      return false;
}

function generateCaptcha() {

  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let genCaptcha = "";
  for (let i = 0; i < 6; i++) {
    genCaptcha += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById('captchaText').textContent = genCaptcha;
  return genCaptcha;
}


function validateForm(event){
  event.preventDefault();
  let captchaInput  = document.getElementById("captchaText").textContent;
  let errors=[];
  
  const form = document.getElementById('form');
  const formdata = new FormData(form);
  const formobject = Object.fromEntries(formdata.entries());
  console.log(formobject);
  let error = 0
  for (let key in formobject) {
        console.log(key);
        if (formobject[key] == ""){
          error +=1 
          alert("Enter Required Field")
          return false
        }
}
if(error === 0){
  if(!(formobject.password == formobject.confirm_password)){
  alert("Password and confirmPassword are not same")
  return false;
  }
  
  const password =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
  if(!password.test(formobject.password)){
    errors.push(`In Valid Password`);
  }
  const emailval = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if(!emailval.test(formobject.email)){
    errors.push("Invalid Email");
  }

  if(!((formobject.phone.length)==10)){
    errors.push("Phone Number Should be 10 digit.")
  }

  if(formobject.captcha === captchaInput){
    if (errors.length > 0) {
      alert(errors.join("\n"));
      generateCaptcha();
      return false;
    } else {
      window.location = "success.html";
    }
  }else{
    alert("In valid captcha")
    return false;
  }
    
}
}





window.onload = function() {
  generateCaptcha();
};