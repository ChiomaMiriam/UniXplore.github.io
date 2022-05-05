let apiUrl = "https://sch-finder-api.herokuapp.com";

const label = document.querySelectorAll(".container");
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const button = document.getElementById("submit");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  signIn(data);
});

function signIn(data) {
  fetch(`${apiUrl}/api/users/signIn`, {
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
  window.location.href = "index.html";
}
