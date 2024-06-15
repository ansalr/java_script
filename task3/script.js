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
    event.preventDefault();

    let cardNumber  = document.getElementById("cardNumber").value;
    let expiryMonth = document.getElementById("expiryMonth").value;
    let expiryYear = document.getElementById("expiryYear").value;
    let cardholder = document.getElementById("cardholder").value;
    let cvv = document.getElementById("cvv").value;
    let firstname = document.getElementById("first-name").value;
    let lastname  = document.getElementById("last_name").value;
    let address  = document.getElementById("address").value;
    let address2 = document.getElementById("address2").value;
    let country  = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let postalcode = document.getElementById("postal-code").value;
    let phone = document.getElementById("phone").value;
    let businessname = document.getElementById("business-name").value;
    let checkbox = document.getElementById("agree_document");
    let captchaInput  = document.getElementById("captcha").value;

    let errors=[];
    
    if (!checkbox.checked){
        alert('You must agree to the terms and conditions.');
      }else{

        if (cardNumber ===""|| expiryMonth ==="" ||expiryYear ===""|| cvv ===""|| firstname ===""||
            lastname ===""|| address ===""|| country ===""|| city ===""|| postalcode ===""|| phone ===""||
            captcha == ""){
        alert("Enter all mandatory fields.");
        captcha = generateCaptcha();
        }else{
            if (!/^\d{16}$/.test(cardNumber)) {
                errors.push("CardNumber must be 16 digits.");
            }else if (/(\d)\1\1\1/.test(cardNumber.replace(/\s/g, ''))) {
                errors.push("Credit Card Number cannot contain sequences of four repeated digits.");
            }
            let currentYear = new Date().getFullYear();
            let currentMonth = new Date().getMonth() + 1; 
            if (expiryYear < currentYear || (expiryYear == currentYear && (expiryMonth < currentMonth || (expiryMonth == currentMonth )))) {
                errors.push("Expiry Date cannot be in the past.");
            }
            if (!/^\d{3}$/.test(cvv)) {
                errors.push("CVV must be 3 digits.");
            }else if (/(\d)\1\1/.test(cvv)) {
                errors.push("CVV cannot contain sequences of three repeated digits.");
             }
            if (!/^[a-zA-Z]+$/.test(firstname)) {
                errors.push("First Name must contain only alphabets.");
              }
            if (!/^[a-zA-Z]+$/.test(lastname)) {
                errors.push("Last Name must contain only alphabets.")
              }            
            if (!/^[a-zA-Z]+$/.test(country)) {
                errors.push("Country Name must contain only alphabets.")              }
            if (!/^[a-zA-Z]+$/.test(city)) {
                errors.push("city Name must contain only alphabets.")
                }
            if (!/^\d{6}$/.test(postalcode)) {
                errors.push("Postalcode must be 6 digits.");
            }
            if (!/^\d{10}$/.test(phone)) {
                errors.push("Phone Number must be 10 digits.");
            }
            if (!/^[a-zA-Z]+$/.test(businessname)) {
                errors.push("Business Name must contain only alphabets.");
              }
            if (errors.length > 0) {
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