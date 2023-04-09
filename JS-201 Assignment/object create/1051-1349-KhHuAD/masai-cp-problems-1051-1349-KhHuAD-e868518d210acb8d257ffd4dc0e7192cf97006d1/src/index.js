/*
## Problem 1.
*/

function productFactory(name, price) {
   let obj={};
   obj.name=name;
   obj.price=price;
  
   obj.increasePrice=function(amount){
      obj.price=obj.price+amount;
      console.log(obj.price);
   }
  
   obj.decreasePrice=function(amount){
      obj.price=obj.price-amount;
      console.log(obj.price);
   }
  obj.displayInfo=function(){
      console.log(`${obj.name} costs Rs. ${obj.price}`);
  }
  return obj;
  }
  
  // example invocation
  let p1 =  productFactory("makebook", 400);
  console.log(p1);
  p1.decreasePrice(100);
  p1.displayInfo();
  p1.increasePrice(200);
  p1.displayInfo();

// example invocation

/*
## Problem 2.
*/

  function ProductConstructor(name, price) {
   //  let obj={};
    this.name=name;
    this.price=price;
   
    this.increasePrice=function(amount){
       this.price=this.price+amount;
       console.log(this.price);
    }
   
    this.decreasePrice=function(amount){
      this.price=this.price - amount;
      console.log(this.price);
    }
   this.displayInfo=function(){
       console.log(`${this.name} costs Rs. ${this.price}`);
   }
   // return obj;
   }
   let p2 =  new ProductConstructor("checkbook", 400);
console.log(p2);
p2.decreasePrice(100);
p2.displayInfo();
p2.increasePrice(200);
p2.displayInfo();


// example invocation
// let p1 = new ProductConstructor("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

/*
## Problem 3.
*/
class ProductClass {
constructor(name,price){
   this.name=name;
   this.price=price;
   this.increasePrice=function(amount){
      this.price=this.price+amount;
      console.log(this.price);
   }
   this.decreasePrice=function(amount){
      this.price=this.price-amount;
      console.log(this.price);
    }
   this.displayInfo=function(){
       console.log(`${this.name} costs Rs. ${this.price}`);
   }
}
}

let p3 = new ProductClass("Notebook", 400);
console.log(p3);
p3.decreasePrice(100);
p3.displayInfo();
p3.increasePrice(200);
p3.displayInfo();

export {productFactory, ProductConstructor, ProductClass}