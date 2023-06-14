const form = document.querySelector("form");
const loader = document.querySelector("img");
const login = document.querySelector(".button");
const input = document.querySelector("input");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".user-phone");
const nameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");

const emailRegex = /^\S{5,}\@\S+\.\w+$/;
const phoneRegex = /^[+()-]?\d{10,13}$/;
const nameRegex = /^[А-ЯІЇ][а-яії]{1,} [А-ЯІЇ][а-яії]{1,} [А-Яії][а-яії]{1,}$/;
const errorMessage = document.querySelector(".error");
const emailErrorMessage = document.querySelector(".email-error");
const phoneErrorMessage = document.querySelector(".phone-error");
const nameErrorMessage = document.querySelector(".name-error");

let email, phone, username, password;

emailInput.addEventListener("input", event => {
    email = emailInput.value;
  
    if (!emailRegex.test(email)) {
      emailErrorMessage.textContent = "Некоректний формат email-адреси!";
      emailErrorMessage.style.display = "block";
    } else {
      emailErrorMessage.style.display = "none";
    }
  });
  
  phoneInput.addEventListener("input", event => {
    phone = phoneInput.value;
  
    if (!phoneRegex.test(phone)) {
      phoneErrorMessage.textContent = "Некоректний формат!";
      phoneErrorMessage.style.display = "block";
    } else {
      phoneErrorMessage.style.display = "none";
    }
  });
  
  nameInput.addEventListener("input", event => {
    username = nameInput.value;
  
    if (!nameRegex.test(username)) {
      nameErrorMessage.textContent = "Введіть своє повне імʼя з великої літери!";
      nameErrorMessage.style.display = "block";
    } else {
      nameErrorMessage.style.display = "none";
    }
  });

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const password = passwordInput.value;
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Full Name:", username);
  console.log("Password:", password);

  loader.style.display = "block";
  form.style.display = "none";

  setTimeout(function () {
    loader.style.display = "none";
    window.location.href = "./profile_page.html";
  }, 2000);
});
