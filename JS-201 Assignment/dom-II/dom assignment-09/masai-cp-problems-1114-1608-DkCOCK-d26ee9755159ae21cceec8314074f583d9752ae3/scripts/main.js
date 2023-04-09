// const { divide } = require("cypress/types/lodash");

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;



// Append div to main section
let mainSection = document.getElementById("data-list-wrapper");

//  add employees
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");

//Sorting 
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

//Filter 
let filterLessThan1LBtn = document.getElementById("filter-less-than-1L");
let filterMoreThanEqualLBtn = document.getElementById(
  "filter-more-than-equal-1L"
);

// Update employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

//Update Salary
let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
  "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
  "update-score-employee"
);

//Employee Data
let employeesData = [];

window.addEventListener("load", () => {
  feachingdata()
})

function feachingdata() {
  fetch(`${baseServerURL}/employees`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      appenddata(data)
    })
    .catch((Error) => {
      console.log(Error);
    })
}

function appenddata(arr) {
   let x=``;
  arr.map((el) => {
    x += `
    <div>
     <div>
        <img src="" alt="">
     </div>
     <div>
        <h3></h3>
        <div></div>
        <a href=""></a>
      </div>
    </div> `
  })
  mainSection.innerHTML=x;

}

