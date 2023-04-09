let mobile_data=JSON.parse(localStorage.getItem("mobile_data"))||[];
let mobile_list=document.querySelector("#mobile_list");
 function append(data) {
  mobile_list.innerHTML="";
  data.forEach((data,index) => {
    let div=document.createElement("div");
    div.setAttribute("id","mobile");
     let image=document.createElement("img");
    image.src=data.image_url;
    // console.log(data.image);
    image.alt="error";
    let name=document.createElement("h2");
    name.innerText=data.name;
    let price=document.createElement("h1");
    price.innerText=data.price;
    let brand=document.createElement("h3");
    brand.innerText=data.brand;
    let remove1=document.createElement("button");
    remove1.innerText="Remove";
    remove1.addEventListener("click",()=>{
        remove(index)
    })
    div.append(image,name,price,brand,remove1);
    mobile_list.append(div);
    
  });

 }
append(mobile_data);
function remove(index) {
  // logic to remove the mobiles data on selected index
  mobile_data.splice(index,1);
  localStorage.setItem("mobile_data",JSON.stringify(mobile_data));
  append(mobile_data)
}
let low=document.querySelector(".low");
low.addEventListener("click",()=>{
  sortLowToHigh(mobile_data);
})
function sortLowToHigh(data) {
  // sort the list of mobiles in ascendning order of price
  data.sort(function (elem11,elem22){
    console.log(elem11.price,elem22.price);
    return Number(elem11.price)-Number(elem22.price);
  })
  append(data);

}
let high=document.querySelector(".high");
high.addEventListener("click",()=>{
  sortHighToLow(mobile_data);
})
function sortHighToLow(data) {
  // sort the list of mobiles in descending order of the price
  data.sort(function (elem1,elem2){
    console.log(elem1.price,elem2.price);
    return Number(elem2.price)-Number(elem1.price);
  })
 append(data)
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
    sortLowToHigh,
    sortHighToLow,
  };
}
