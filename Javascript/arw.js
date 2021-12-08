// Multi parameter, multi line code

calculateCost = (ticketPrice, noOfPerson)=>{
    noOfPerson= ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500, 2)); 


//No parameter,single line code
trip = () => "Lets go to trip."
console.log(trip());    


//  trip = (cost , num)=> {
//     total = cost * num;
//     return total
// }
// console.log(trip(200,2))

//One parameter, single line code
let trips = place => "Trip to " + place;
console.log(trips("Paris")); 

var t = _ => "Trip to " + _;
console.log(t("Vadakara"));  

