//Code to declare the object and modify/delete the values after declaration
let productDetails:{
    productID:number;
    productName:string;
    isAvailable?:boolean;
}={
    productID:253,
    productName:"Car Spares",
    isAvailable:true,
}
//modify the product name
let modifiedProduct=productDetails.productName="Mobile Phone";
console.log(modifiedProduct);

console.log(productDetails.isAvailable);
//delete the isAvailable property
delete productDetails.isAvailable;
console.log(productDetails.isAvailable);