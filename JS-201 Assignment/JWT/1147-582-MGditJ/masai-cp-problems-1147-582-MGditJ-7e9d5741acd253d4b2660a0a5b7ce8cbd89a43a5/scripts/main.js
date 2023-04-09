// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;


loginUserButton.addEventListener("click",()=>{
  fetchlogin()
})

async function fetchlogin(){
  try{
    let logindata={
      username:loginUserUsername.value,
      password:loginUserPassword.value
    }
  let res= await fetch(userLoginURL,{
    method:"POST",
    headers:{"Content-Type":"application/json" },
    body:JSON.stringify(logindata)
  })
  let data= await res.json();
  console.log(data);
  // console.log(data.accessToken)
  let  userAuthToken=data.accessToken;
  let userId=data.user.id;
  let tokenobj={
    localAccessToken:userAuthToken,
    userId:userId
  }
  localStorage.setItem("accesstoken",JSON.stringify(tokenobj));
  welcome(data.user.username)
  }
  catch(error){
    console.log(error)
  }
}

function welcome(userdata){
  let x=` <h5 class="notification info">
  hey ${userdata}, welcome back!
</h5>`;
notificationWrapper.innerHTML=x;
}

getTodoButton.addEventListener("click",()=>{

})

async function fetchtodos(){
  let accesstoken=JSON.parse(localStorage.getItem("accesstoken"))
  try{
    let res= await fetch(userLoginURL,{
      method:"POST ",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${accesstoken.localAccessToken}`
     },
     
    })
    let data= await res.json();
    console.log(data);
  }
  catch(error){
   console.log(error);
  }
}