class Customer {
  constructor(name, email, contact, accountType) {
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.accountType = accountType;
  }

  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setEmail(email) {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  setContact(contact) {
    this.contact = contact;
  }
  getContact() {
    return this.contact;
  }
  setAccountType(accountType) {
    this.accountType = accountType;
  }
  getAccountType() {
    return this.accountType;
  }
}

// -----------------------------------------------------------
// ------------------------Validations-----------------------
// -----------------------------------------------------------

function validateName(value) {
  console.log("Test", value);
  const pattern = "^[A-Za-z ]{1,50}";
  let errorSpan = document.getElementById("error-name");
  if (value.search(pattern) == -1) {
    errorSpan.innerText = "Enter Only Alphabets";
    return false;
  } else {
    errorSpan.innerText = "";
    return true;
  }
}
function validateEmail(value) {
  console.log("Test", value);
  const pattern = "^[A-Za-z][A-Za-z_.]*@[A-Za-z][A-Za-z0-9-.]*.(com|in|org)$";
  let errorSpan = document.getElementById("error-email");
  if (value.search(pattern) == -1) {
    errorSpan.innerText = "Email doesn't match the pattern";
    return false;
  } else {
    errorSpan.innerText = "";
    return true;
  }
}
function validateContact(value) {
  console.log("Test", value);
  const pattern = "^[7-9]{1}[0-9]{9}";
  let errorSpan = document.getElementById("error-contact");
  if (value.search(pattern) == -1) {
    errorSpan.innerText = "Phone number doesn't match the pattern";
    return false;
  } else {
    errorSpan.innerText = "";
    return true;
  }
}
function validateAccountType(value) {
  let errorSpan = document.getElementById("error-account-type");
  if (value == "") {
    errorSpan.innerText = "Select an account type";
    return false;
  } else {
    errorSpan.innerText = "";
    return true;
  }
}
