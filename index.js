const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

const form = document.getElementById("theForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  emailTrimmed = email.value.trim();
  countryTrimmed = country.value.trim();
  zipcodeTrimmed = zipCode.value.trim();
  passwordTrimmed = password.value.trim();
  passwordConfirmTrimmed = passwordConfirm.value.trim();

  if (emailTrimmed === "") {
    showError(email, "Email input cannot be blank");
  } else {
    successfulInput(email);
  }

  if (countryTrimmed === "") {
    showError(country, "Country input cannot be blank");
  } else {
    successfulInput(country);
  }

  if (zipcodeTrimmed === "") {
    showError(zipCode, "Zipcode input cannot be blank");
  } else {
    successfulInput(zipCode);
  }

  if (passwordTrimmed === "") {
    showError(password, "Password input cannot be blank");
  } else {
    successfulInput(password);
  }

  if (passwordConfirmTrimmed === "") {
    showError(passwordConfirm, "Password confirmation cannot be blank");
  } else if (passwordConfirmTrimmed === passwordTrimmed) {
    successfulInput(passwordConfirm);
  } else {
    showError(passwordConfirm, "Passwords do not match");
  }
}

function showError(type, errorMessageToBeShown) {
  const specificForm = type.parentElement;
  specificForm.className = "inputContainer error";
  const errorMessage = specificForm.querySelector("small");
  errorMessage.innerText = errorMessageToBeShown;
  errorMessage.style.visibility = "visible";
}

function successfulInput(type) {
  const specificForm = type.parentElement;
  specificForm.className = "inputContainer success";
  const errorMessage = specificForm.querySelector("small");
  errorMessage.style.visibility = "hidden";
}
