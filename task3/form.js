function generateCaptcha() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById('captchaText').textContent = captcha;
    return captcha;
}

function validateForm(event){
    let checkbox = document.getElementById("agree_document");
    let captchaInput  = document.getElementById("captcha").value;
    event.preventDefault();
    const form = document.getElementById('form');
    const formdata = new FormData(form);
    const formobject = Object.fromEntries(formdata.entries());
    console.log(formobject.length);


    let errors=[];
    const mandatory = [formobject.cardNumber,formobject.expiryYear,formobject.expiryMonth,formobject.cardholder,formobject.cvv,
        formobject.first_name,formobject.last_name,formobject.address,formobject.city,formobject.postal_code,
        formobject.phone]
    let mandatoryCount = 0
    for (let i = 0; i < 12; i++) {
        
        if (mandatory[i] === "") {
            mandatoryCount++ 
          }
      }

    if (!checkbox.checked){
        alert('You must agree to the terms and conditions.');
        return false;
      }else{
        
        if (mandatoryCount > 0){
        alert("Enter all mandatory fields.");
        captcha = generateCaptcha();
    } else{

            if (!/^\d{16}$/.test(formobject.cardNumber)) {
                errors.push("CardNumber must be 16 digits.");
            }else if (/(\d)\1\1\1/.test(formobject.cardNumber.replace(/\s/g, ''))) {
                errors.push("Credit Card Number cannot contain sequences of four repeated digits.");
            }
            let currentYear = new Date().getFullYear();
            let currentMonth = new Date().getMonth() + 1; 
            if (formobject.expiryYear < currentYear || (formobject.expiryMonth < currentMonth )) {
                errors.push("Expiry Date cannot be in the past.");
            }
            if (!/^\d$/.test(formobject.cvv)) {
                errors.push("CVV must be 3 digits.");
            }else if (/(\d)\1\1/.test(formobject.cvv)) {
                errors.push("CVV cannot contain sequences of three repeated digits.");
             }
            
            if (!/^\d$/.test(formobject.postal_code)) {
                errors.push("Postalcode must be 6 digits.");
            }
            if (!/^\d$/.test(formobject.phone)) {
                errors.push("Phone Number must be 10 digits.");
            }
            const checkalph = ['formobject.first_name','formobject.last_name','formobject.city','formobject.business_name','formobject.cardholder'] 
            for (let i = 0; i < 5; i++) {
                if (!/^[a-zA-Z]+$/.test(checkalph[i])) {
                    let error = checkalph[i].split('.')[1]
                    errors.push(error + "Should be alphabets.");
                  }
              }

            if (errors) {
                alert(errors.join("\n"));
                captcha = generateCaptcha();
                document.getElementById('captcha').textContent = captcha;
            } else {
                if (captchaInput !== captcha) {
                    alert("Invalid CAPTCHA. Please try again.");
                    captcha = generateCaptcha();
                }else{
                alert("Form submitted successfully.");
                location.reload();
            }
    
            }
        }
    }
}
    


window.onload = function() {
    generateCaptcha();
  };