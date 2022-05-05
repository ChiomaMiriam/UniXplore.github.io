let apiUrl = "https://sch-finder-api.herokuapp.com";
const name = document.getElementById("name").value;
const country = document.getElementById("country").value;
const city = document.getElementById("city").value;
const address = document.getElementById("address").value;
const type = document.getElementById("type").value;
const tuition_fee_range = document.getElementById("tuition_fee_range").value;
const ownership = document.getElementById("ownership").value;
const founded = document.getElementById("founded").value;
const total_enrollment = document.getElementById("total_enrollment").value;
const short_desc = document.getElementById("short_desc").value;
const form = document.getElementById("form");
const button = document.getElementById("submit");

function addASchool(newData) {
  const token = window.localStorage.getItem("token");
  console.log(token);
  fetch(`${apiUrl}/api/schools/add`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((responseJson) => {
      reDirect();
    })
    .catch((error) => {
      console.log(error);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let newData = {
    name: document.getElementById("name").value,
    country: document.getElementById("country").value,
    city: document.getElementById("city").value,
    address: document.getElementById("address").value,
    type: document.getElementById("type").value,
    tuition_fee_range: document.getElementById("tuition_fee_range").value,
    ownership: document.getElementById("ownership").value,
    founded: document.getElementById("founded").value,
    total_enrollment: document.getElementById("total_enrollment").value,
    short_desc: document.getElementById("short_desc").value,
  };
  addASchool(newData);
});

function reDirect() {
  window.location.href = "index.html";
  console.log("school added successfully");
}

function saveToken(token) {
  console.log(token);
  window.localStorage.setItem("token", token);
}
