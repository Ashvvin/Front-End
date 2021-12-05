var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
    };
    return Employee;
}());
var emp = new Employee();
emp.eid = 101;
emp.ename = "abc";
emp.display();
//  constructor
// declaring a Product class
var Product = /** @class */ (function () {
    // constructor declaration
    function Product(productId, prodPrice) {
        this.productId = productId;
        this.prodPrice = prodPrice;
    }
    Product.prototype.getProductId = function () {
        return 'Product id is : ' + this.productId;
    };
    Product.prototype.getProductPrice = function () {
        return this.prodPrice;
    };
    return Product;
}());
// creation of Product class object
var product = new Product(1234, 123);
var pobj = new Product(12345, 100);
// line to populate the product id details
console.log(product.getProductId());
console.log(pobj.getProductPrice());
