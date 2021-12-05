// interface Iperson{
//     name : string,
//     age : number,
//     isMale : boolean,
//     speak : () => void,
//     print : () => string
// }

// let p1: Iperson ={
//     name : "john",
//     age : 5,
//     isMale : false,
//     speak : () => console.log('Hello')
//     print : function(){return `${this.name} is ${this.age} years old`}
    
// }


// declaring an interface
// interface Product {
//     productId: number ;
//     productName: string ;
//     productPrice: number
// }

// // logic to display the Product details with interface object as parameter
// function getProductDetails(productobj: Product): string {
//     return 'The product name is : ' + productobj.productName + '\ '+ ' Product id:' +productobj.productId +'\ '+ ' Product price:' +productobj.productPrice;
// }

// // declaring a variable having interface properties
// // const prodObject = {productId: 1001, productName: 'Mobile'};
// // let prodObject={productName:'Mobile', productPrice:10000};
// let prodObject={productId: 1001, productName:'Mobile', productPrice:10000};

// // declaring variable and invoking Product details function
// const productDetails: string = getProductDetails(prodObject);

// // line to populate the created product on console
// console.log(productDetails);


// declaring an interface
// interface Product {
//     productId: number;
//     productName: string;
//     productCategory:string; 
// }

// // logic to display the Product details with interface object as parameter
// // tslint:disable-next-line:adjacent-overload-signatures
// function getProductDetails(productobj: Product): string {
//     return 'The product name is : ' + productobj.productName + '\ '+  productobj.productId +'\ '+ productobj.productCategory;
// }

// // declaring a variable along with interface properties
// const prodObject = {productId: 1001, productName: 'Mobile', productCategory: 'Gadget'};

// // declaring variable and invoking Product details function
// const productDetails: string = getProductDetails(prodObject);

// // line to populate the created product variable on console
// console.log(productDetails);


//optional

// declaring an interface with optional parameter
// interface Product {
//     productId?: number;
//     productName: string;
//     productCategory: string;
// }

// // logic to display the Product details with interface object as parameter
// function getProductDetails(productobj: Product): string {
//     return 'The product name is ' + productobj.productName  +  productobj.productCategory;
// }

// // declaring a variable along with interface properties
// const prodObject = {productName: 'Mobile', productCategory: 'Gadget'};

// // declaring variable and invoking Product details function
// const productDetails: string = getProductDetails(prodObject);

// // line to populate the created product variable on console
// console.log(productDetails);


//fuctn types

// declaring a function
// function CreateCustomerID(name: string, id: number): string {
//     return 'The customer id is ' + name + ' ' + id;
//     }

//     // declaring a interface with function type
// interface StringGenerator {
    
//     (chars: string, nums: number): string;
//     }

//     // creating reference variable of above declared interface
// let idGenerator: StringGenerator;

//     // assignment of function to interface reference variable
// idGenerator = CreateCustomerID;

//     // declaring a string parameter to hold return value of function type interface
// // const customerId: string = idGenerator('Mr.Tom', 101);
// let id2: string = idGenerator("Mr.Sam", 102);

//     // line to populate the Customer Details
// console.log(id2);


//Extends

// declaring a Category interface
// interface Category {
//     categoryName: string;
//     }

// // declaring a Product interface
// interface Product {
//         productName: string;
//         productId: number;
//         brand: string;
//     }

// // declaring a ProductList interface which is extends from Category and Product interfaces
// interface ProductList extends Category, Product {
//         list: Array<string>;
//     }

// // declaring a variable which is type of ProductList interface
// const productDetails: ProductList = {
//         categoryName: 'Gadget',
//         productName: 'Mobile',
//         productId: 1234,
//         list: ['Samsung', 'Motorola', 'LG'],
//         brand: "Iphone"
//     };



// // assigning list value of productDetails variable into another variable
// const listProduct = productDetails.list;

// // assigning productName value of productDetails variable into another variable
// const pname: string = productDetails.productName;

// // line to populate Product name
// console.log('Product Name is ' + pname);

// // line to populate Product list
// console.log('Product List is ' + listProduct);

// console.log('Brand name :' + productDetails.brand);


// declaring a Product interface
// 




// interface Employee {
//   dept: string;
//   name: string;
// }

// function printEmpDetails(emp: Employee) {
//   console.log(emp.name + " " + emp.dept);
// }

// let myObj = { dept: "Testing"};
// printEmpDetails(myObj);