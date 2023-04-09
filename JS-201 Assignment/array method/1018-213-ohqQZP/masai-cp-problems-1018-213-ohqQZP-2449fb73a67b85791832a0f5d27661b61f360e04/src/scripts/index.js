let formdata=document.querySelector("#mobile_form");
formdata.addEventListener("submit",getInputData);
function getInputData(el){
  el.preventDefault();
  let name=document.querySelector("#mobile_name").value;
  let brand=document.querySelector("#mobile_brand").value;
  let price=document.querySelector("#mobile_price").value;
  let image=document.querySelector("#mobile_image").value;
  addData(name,brand,price,image)
  document.querySelector("#mobile_name").value="";
  document.querySelector("#mobile_brand").value="";
  document.querySelector("#mobile_price").value="";
  document.querySelector("#mobile_image").value="";
 
}
let mobile_data=JSON.parse(localStorage.getItem("mobile_data"))||[];
function addData(name, brand, price, image) {
  // console.log(image);
  let obj={
    name:name,
    brand:brand,
    price:price,
    image_url:image,
  }
  mobile_data.push(obj)
  localStorage.setItem("mobile_data",JSON.stringify(mobile_data));
 
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    addData,
  };
}