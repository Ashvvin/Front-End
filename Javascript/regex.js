function validateName(name,pattern){
    if(name.match(pattern)){
        console.log("match found");
    }
    else {
        console.log("match not found");
    }
}
var name = "$John";
// var regEx = /\$/;    //check for $ character in the name"
var regEx = /\$[A-z]+/; 
validateName(name,regEx)