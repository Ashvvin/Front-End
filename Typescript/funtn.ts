// // declaring a function which accepts string datatype as parameter and returns string array
// function getMobileByManufacturer(manufacturer: string): string[] {

//     let mobileList: string[];

//     if (manufacturer === 'Samsung') {
//         mobileList = ['Samsung Galaxy S6 Edge', 'Samsung Galaxy Note 7',
// 'Samsung Galaxy J7 SM-J700F'];
//         return mobileList;
//     } else if (manufacturer === 'Apple') {
//     mobileList = ['Apple iPhone 5s', 'Apple iPhone 6s ', 'Apple iPhone 7'];
//     return mobileList;
//     } else {
//     mobileList = ['Nokia 105', 'Nokia 230 Dual Sim'];
//     return mobileList;
//     }
// }

// // logic to populate the Samsung manufacturer details on console
// console.log('The available mobile list: ' + getMobileByManufacturer('Nokia'));

// // Arrow functn

// // declaring an Array with 3 objects
// const manufacturers = [{ id: 'Samsung', price: 150 },
//         { id: 'Microsoft', price: 200 },
//         { id: 'Apple', price: 400  },
//         { id: 'Micromax', price: 100  }
//     ];

// let test;

// // Arrow function to populate the details of Array whose price is greater than 200
// function myFunction() {
//   test = manufacturers.filter((manufacturer) => manufacturer.id = "Apple");
// }

// // self-invoking an arrow function
// myFunction();

// console.log('Details of Manufacturer array are : ');

// // logic to populate the manufacturer array details based on id value
// for (const item of manufacturers) {
//     console.log(item.id = "Microsoft",item.price);
// }


// Optional

// declaring a function with optional parameter
// function getMobileByManufacturer(manufacturer: string = 'Samsung', id?: number): string[] {
// function getMobileByManufacturer(manufacturer,id?:number): string[]{

//     let mobileList: string[];

//    // logic to be evaluated if id parameter while invoking above declared function
//     if (id) {
//     if (id === 101) {
//         mobileList = ['Moto G Play, 4th Gen', 'Moto Z Play with Style Mod'];
//         return mobileList;
//         }
//     }

//     // logic to return mobileList based on manufacturer category
//     if (manufacturer === 'Samsung') {
//           mobileList = [' Samsung Galaxy S6 Edge', ' Samsung Galaxy Note 7',
//   ' Samsung Galaxy J7 SM-J700F'];
//           return mobileList;
//       } else if (manufacturer === 'Apple') {
//             mobileList = [' Apple iPhone 5s', ' Apple iPhone 6s', ' Apple iPhone 7'];
//             return mobileList;
//       } else {
//             mobileList = [' Nokia 105', ' Nokia 230 Dual Sim'];
//             return mobileList;
//       }

//   }

//   // statement to invoke function with optional parameter
// console.log('The available mobile list : ' + getMobileByManufacturer('Apple'));

//   // statement to invoke function with default parameter
// // console.log('The available mobile list : ' + getMobileByManufacturer(undefined, 101));
// console.log("The available mobile list : " + getMobileByManufacturer(undefined));

//  console.log("The available mobile list : " + getMobileByManufacturer(101));

//  console.log("The available mobile list : " + getMobileByManufacturer(undefined,102));

// declaring a empty string array
// const cart: string[] = [];
// let cart: string=[];

// // arrow function logic to push values into cart array
// const pushtoCart = (item: string) => { cart.push(item); };

// // logic to add items into cart
// function addtoCart(productName: string[]): string[]

//     for (const item of productName) {
//         pushtoCart(item);
//     }
//     return cart;

// }

// // to populate value on console
// console.log("Cart Items are:"+addtoCart("Moto G Play, 4th Gen","Apple iPhone 5s",1));





