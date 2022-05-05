let apiUrl = "https://sch-finder-api.herokuapp.com";
const form = document.getElementById("form");
const button = document.getElementById("submit");
const schoolsList = document.getElementById("form");

function updateASchool(newData) {
  const token = window.localStorage.getItem("token");
  console.log(token);
  const id = getUrlParameter("id");
  console.log(id);
  fetch(`${apiUrl}/api/schools/${id}`, {
    method: "PUT",
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
      console.log(newData);
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
  updateASchool(newData);
});

function reDirect() {
  window.location.href = "index.html";
  console.log("school updated successfully");
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getASchool() {
  const id = getUrlParameter("id");
  console.log(id);
  fetch(`${apiUrl}/api/schools/${id}`)
    .then((response) => response.json())
    .then((data) => bringData(data));
}

getASchool();

function bringData(school) {
  console.log(school);
  let list = `<form id = "form">
  <h4 class="update">Update a school</h4>
        <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                placeholder="${school.name}"
                            />
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                id="country"
                                placeholder="${school.country}"
                            />
                            </div>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="city"
                                    placeholder="${school.city}"
                                />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="address"
                                        placeholder="${school.address}"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="type"
                                            placeholder="${school.type}"
                                        />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="tuition_fee_range"
                                            placeholder="${school.tuition_fee_range}"
                                        />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="ownership"
                                            placeholder="${school.ownership}"
                                        />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="founded"
                                            placeholder="${school.founded}"
                                        />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input
                                            type="text"
                                            class="form-control"
                                            id="total_enrollment"
                                            placeholder="${school.total_enrollment}"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input
                                            type="text"
                                            class="form-control"
                                            id="short_desc"
                                            placeholder="${school.short_desc}"
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" id="submit" class="btn btn-secondary mt-4">Add School</button>
                    </form>`;

  schoolsList.innerHTML = list;
}
