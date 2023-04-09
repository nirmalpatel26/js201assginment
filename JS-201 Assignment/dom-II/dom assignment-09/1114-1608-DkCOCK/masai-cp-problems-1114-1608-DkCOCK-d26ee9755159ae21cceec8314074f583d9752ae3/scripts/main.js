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
let filterMoreThanEqualLBtn = document.getElementById("filter-more-than-equal-1L");

// Update employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

//Update Salary
let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById("update-score-employee-salary");
let updateScoreEmpSalaryButton = document.getElementById("update-score-employee");

//Employee Data
let employeesData = [];
window.addEventListener("load", () => {
  feachingdata()
})

function feachingdata() {
  fetch(`${baseServerURL}/employees`)
    .then((res) => {
      // console.log(res);
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
    // console.log(`${baseServerURL}${el.image}`);
    x += `
    <div class="card" data-id="1">
     <div class="card-img>
        <img src="${baseServerURL}${el.image}" alt="">
     </div>
     <div class="card-body">
        <h3  class="card-title"  >${el.name}</h3>
        <div class="card-salary">${el.salary}</div>
        <a href="#" data-id="1" class="card-link">EDIT</a> 
      </div>
    </div>
     `
  })
 
  mainSection.innerHTML=x;
}

empCreateBtn.addEventListener("click",()=>{
  let empname=empNameInput.value;
  let empImg=empImgInput.value;
  let empDES=empDeptInput.value;
  let empSalary=empSalaryInput.value;
  // console.log(empname,empImg,empDES,empSalary)

  let employeedata={
    name:empname,
    image:empImg,
    department:empDES,
    salary:empSalary
  }

  fetch(`${baseServerURL}/employees`,{
   method: "POST",
   headers:{'Content-Type':"application/json"},
   body: JSON.stringify(employeedata)
  })

  .then((res)=> res.json())
  .then((data)=> {
    feachingdata()
  })
  .catch((error)=> console.log(error))
})



updateEmpUpdateBtn.addEventListener("click",()=>{
let updateId=updateEmpIdInput.value;
let updatename= updateEmpNameInput.value;
let updateIMG=updateEmpImageInput.value;
let updateDES= updateEmpDeptInput.value;
let updatesalary=updateEmpSalaryInput.value;

let updateemployeedata={
  id:updateId,
  name:updatename,
  image:updateIMG,
  department:updateDES,
  salary:updatesalary
}

  fetch(`${baseServerURL}/employees/${updateId}`,{
  method: "PUT",
  headers:{'Content-Type':"application/json"},
  body: JSON.stringify(updateemployeedata)
 })

 .then((res)=> res.json())
 .then((data)=> {
   feachingdata()
  
  //  console.log(data);
 })
 .catch((error)=> console.log(error))

})


updateScoreEmpSalaryButton.addEventListener("click",()=>{
  let empid=updateScoreEmpId.value;
  let empsalary= updateScoreEmpSalary.value;

  let updeatsalary={
    id:empid,
    salary:empsalary,
  }

  fetch(`${baseServerURL}/employees/${empid}`,{
    method: "PATCH",
    headers:{'Content-Type':"application/json"},
    body: JSON.stringify(updeatsalary)
   })
  
   .then((res)=> res.json())
   .then((data)=> {
     feachingdata()
    //  console.log(data);
   })
   .catch((error)=> console.log(error))
})

sortAtoZBtn.addEventListener("click",()=>{

  fetch(`${baseServerURL}/employees?_sort=salary&_order=asc`)
   .then((res)=> res.json())
   .then((data)=> {
    appenddata(data)
    //  feachingdata()
     
    //  console.log(data);
   })
   .catch((error)=> console.log(error))
})

sortZtoABtn.addEventListener("click",()=>{

  fetch(`${baseServerURL}/employees?_sort=salary&_order=desc`)
   .then((res)=> res.json())
   .then((data)=> {
    appenddata(data)
    //  feachingdata()
     
    //  console.log(data);
   })
   .catch((error)=> console.log(error))
})

filterLessThan1LBtn.addEventListener("click",()=>{
  
  fetch(`${baseServerURL}/employees`)
  .then((res)=> res.json())
  .then((data)=> {

    data=data.filter((elem)=>{
      if(elem.salary<100000){
        return elem.salary<100000;
      }
    })
   appenddata(data)
   //  feachingdata()
    
    // console.log(data);
  })
  .catch((error)=> console.log(error))
})

filterMoreThanEqualLBtn.addEventListener("click",()=>{
  fetch(`${baseServerURL}/employees?`)
  .then((res)=> res.json())
  .then((data)=> {
    data=data.filter((elem)=>{
      if(elem.salary>=100000){
        return elem.salary>=100000;
      }
    })
   appenddata(data)
  //  console.log(data)
   //  feachingdata()
    
    // console.log(data);
  })
  .catch((error)=> console.log(error))
})