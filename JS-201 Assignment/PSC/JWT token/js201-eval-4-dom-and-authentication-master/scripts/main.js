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
let loginUserPassword = document.getElementById("login-user-password");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;


loginUserButton.addEventListener("click", ()=> {
  loginFunction();
  // console.log("click");
})

async function loginFunction() {
  try {
    let userObj = {
      username: loginUserUsername.value,
      password: loginUserPassword.value
    }
    let response = await fetch(userLoginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    });
    let data = await response.json(); 
    console.log(data);
    userAuthToken = data.accessToken
    localStorage.setItem("localAccessToken", data.accessToken);
  }
  catch (e) {
    console.log(e)
  }
}

post 
// method: "POST",
//   headers: {
//   "Content-Type": "application/json",
//     Authorization: `Bearer ${userAuthToken}`
//   }

