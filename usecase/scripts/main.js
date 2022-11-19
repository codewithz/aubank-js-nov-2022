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

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", addCustomer);

function validateName(value) {
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

function addCustomer() {
  event.preventDefault();
  const name = document.getElementById("customer-name").value;
  const email = document.getElementById("customer-email").value;
  const contact = document.getElementById("customer-contact").value;
  const accountType = document.getElementById("customer-account-type").value;

  const customer = new Customer(name, email, contact, accountType);
  if (validateSubmit(customer)) {
    addCustomerToTable(customer);
    console.log(customer);
  } else {
    alert("Some data is invalid");
  }
}

function validateSubmit(customer) {
  const { name, email, contact, accountType } = customer;
  return (
    validateName(name) &&
    validateEmail(email) &&
    validateContact(contact) &&
    validateAccountType(accountType)
  );
}

// function validateSubmit({ name, email, contact, accountType }) {
//   return (
//     validateName(name) &&
//     validateEmail(email) &&
//     validateContact(contact) &&
//     validateAccountType(accountType)
//   );
// }

function addCustomerToTable(customer) {
  const { name, email, contact, accountType } = customer;

  let tableBody = document.querySelector("tbody");

  let tableRow = document.createElement("tr");

  const tableRowData = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${contact}</td>
    <td>${accountType}</td>
  `;

  tableRow.innerHTML = tableRowData;

  tableBody.appendChild(tableRow);
}
