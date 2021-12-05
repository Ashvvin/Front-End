class Employee{
    eid:number;
    ename:string;

    display():void{
        console.log(this.eid);
        console.log(this.ename);
        
    }


}
 var emp = new Employee();
 emp.eid = 101;
 emp.ename="abc"
 emp.display()




//  constructor



 // declaring a Product class
class Product {

    static productPrice: string;
    productId: number;
    prodPrice : number
// constructor declaration
    constructor(productId: number , prodPrice:number) {
        this.productId = productId;
        this.prodPrice = prodPrice;
    }
    getProductId(): string {
        return 'Product id is : ' + this.productId;
    }
    getProductPrice(): number{
        return   this.prodPrice;
    }
}

// creation of Product class object
const product : Product = new Product(1234,123);
var pobj : Product = new Product(12345,100);

// line to populate the product id details
console.log(product.getProductId());
console.log(pobj.getProductPrice())


