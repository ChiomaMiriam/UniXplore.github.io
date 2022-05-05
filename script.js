let apiUrl = "https://sch-finder-api.herokuapp.com";

// const userData = {
//   firstName: "Chioma",
//   lastName: "Miriam",
//   email: "chichi@gmail.com",
//   telephone: 08184261803,
//   dateOfBirth: 19 / 02 / 1997,
//   username: "chichi",
//   password: "mimi1234",
//   confirmPassword: "mimi1234",
// };

// const signUp = (e) => {
//   let formData = {
//     fName: document.getElementById("firstname").value,
//     lName: document.getElementById("lastname").value,
//     phone: document.getElementById("phone").value,
//     email: document.getElementById("email").value,
//     dob: document.getElementById("dob").value,
//     uName: document.getElementById("uname").value,
//     pwd: document.getElementById("pwd").value,
//     pwd2: document.getElementById("pwd2").value,
//   };

//   localStorage.setItem(formData, JSON.stringify(formData));
//   console.log(localStorage.getItem(formData));
//   e.preventDefault();
// };

// function signUp(data) {
//   fetch(`${apiUrl}/api/users/signup`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => saveToken(json.token));
// }

// function saveToken(token) {
//   console.log(token);
//   window.localStorage.setItem("token", token);
// }

// function getToken() {
//   return window.localStorage.getItem("token");
// }
// signUp.addEventListener("submit", (e)) => {
//     e.preventDefault();
// const userData = {
//   firstName: "Chioma",
//   lastName: "Miriam",
//   email: "chichi@gmail.com",
//   username: "chichi",
//   password: "mimi1234",
//   confirmPassword: "mimi1234",
// };

// signUp(userData);
// const token = getToken();
// console.log(token);

// // for modal
// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".modal");
//   var instances = M.Modal.init(elems);
// });

// Or with jQuery

// $(document).ready(function(){
//   $('.modal').modal();
// });

const label = document.querySelectorAll(".container");
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

const button = document.getElementById("submit");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value,
  };

  signUp(data);
});

function signUp(data) {
  fetch(`${apiUrl}/api/users/signup`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          saveToken(json.token);
          reDirect();
        });
      }
      throw new Error("Something went wrong");
    })

    .catch((error) => {
      console.log(error);
    });
}
function saveToken(token) {
  console.log(token);
  window.localStorage.setItem("token", token);
}

function getToken() {
  return window.localStorage.getItem("token");
}

function reDirect() {
  window.location.href = "signin.html";
}
