const inputLogin = document.querySelector(".input-login");
const inputPassword = document.querySelector(".input-password");
const invalidLogin = document.querySelector(".invalid-login");
const invalidPassword = document.querySelector(".invalid-password");
const logBtn = document.querySelector(".log-in-btn");
const form = document.querySelector(".form");

const checkValid = /^[a-zA-Z0-9]{6,20}$/;

const validLogIn = (validation, input, display) => {
  if (!validation.test(input)) {
    display.style.display = "block";
  }
};
inputLogin.onblur = () => {
  validLogIn(checkValid, inputLogin.value, invalidLogin);
};
inputPassword.onblur = () => {
  validLogIn(checkValid, inputPassword.value, invalidPassword);
};
inputLogin.onfocus = () => {
  invalidLogin.style.display = "none";
  invalidLogin.value = "";
};
inputPassword.onfocus = () => {
  invalidPassword.style.display = "none";
  invalidPassword.value = "";
};

logBtn.addEventListener("click", () => {
  if (
    invalidLogin.style.display === "none" &&
    invalidPassword.style.display === "none"
  ) {
    form.setAttribute("action", "./countries/index.html");
    form.setAttribute("target", "_blank");
  }
});



