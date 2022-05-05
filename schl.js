const schoolsList = document.getElementById("school-container");
// const schoolsList = document.querySelector(".school-container");
let apiUrl = "https://sch-finder-api.herokuapp.com";
function fetchAllSchools() {
  fetch(`${apiUrl}/api/schools`)
    .then((response) => response.json())
    .then((data) => renderData(data));
}
fetchAllSchools();

function renderData(schools) {
  //   console.log(schools);
  let list = schools
    .map(
      (schools, i) =>
        `  
        <div class="col card-group">
          <div class="card img-hover">
            <img src="images/toronto.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">${schools.name}</h3>
              <h4> ${schools.country} </h4>
              <h5> Total_Enrollment - ${schools.total_enrollment} </h5>
              <p class="card-text">
              ${schools.short_desc} 
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href="updateaschool.html?id=${schools.id}" class="btn btn-sm btn-outline-secondary">Update</a>
                  <button type="button" onclick="deleteASchool(${schools.id})" id="" class="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
               <small class="text-muted">${schools.tuition_fee_range}</small>
              </div>
            </div>
          </div>
        </div>

        
`
    )
    .join(" ");
  schoolsList.innerHTML = list;
}

const deleteASchool = (id) => {
  const token = window.localStorage.getItem("token");
  console.log(id);
  console.log(token);
  fetch(`${apiUrl}/api/schools/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => {
    console.log("School Deleted Successfully");
    fetchAllSchools();
  });
};
