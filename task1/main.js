
function generateCaptcha(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var captcha = '';
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    document.getElementById('captchaText').textContent = captcha;
    return captcha.strike();
  }

  function refreshCaptcha() {
    currentCaptcha = generateCaptcha(6); 
  }

  var currentCaptcha = generateCaptcha(6);
  this.refreshCaptcha();
  function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var captcha = document.getElementById("captcha").value;

    var errors = [];

    document.getElementById('fnameerror').textContent = "";
    document.getElementById('lnameerror').textContent = "";
    document.getElementById('emailerror').textContent = "";
    document.getElementById('ageerror').textContent = "";
    document.getElementById('captchaerror').textContent = "";

    if (firstName == "" && email == "" && age == "") {
      this.refreshCaptcha();
      document.getElementById('fnameerror').textContent = "First Name is mandatory";
      document.getElementById('emailerror').textContent = "Email is mandatory";
      document.getElementById('ageerror').textContent = "Age is mandatory";
      alert("All Field Are Empty");
      return false;
    }

    if (firstName == "") {
      document.getElementById('fnameerror').textContent = "First name Missing";
      errors.push("First Name is mandatory");
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      document.getElementById('fnameerror').textContent = "First Name must contain only alphabets";
      errors.push("First Name must contain only alphabets");
    }

    if (email == "") {
      document.getElementById('emailerror').textContent = "Email is mandatory";
      errors.push("Email is mandatory");
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      document.getElementById('emailerror').textContent = "Email must contain '@gmail.com'";
      errors.push("Email must contain '@gmail.com'");
    }

    if (age == "") {
      document.getElementById('ageerror').textContent = "Age is mandatory";
      errors.push("Age is mandatory");
    } else if (isNaN(age) || age < 18) {
      document.getElementById('ageerror').textContent = "Age must be a number and above 18";
      errors.push("Age must be a number and above 18");
    }

    if (lastName != "" && !/^[a-zA-Z]+$/.test(lastName)) {
      document.getElementById('lnameerror').textContent = "Only Alphabet Accepted";
      errors.push("Last Name must contain only alphabets");
    }

    if (captcha != currentCaptcha) {
      document.getElementById('captchaerror').textContent = "Invalid Captcha";
      errors.push("Invalid Captcha");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      this.refreshCaptcha();
      return false;
    } else {
      alert("Form submitted successfully");
    }

    return true;
  }
