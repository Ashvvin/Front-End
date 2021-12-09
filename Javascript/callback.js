function check(value){ 
    console.log(value);
}
function getTrip (callback) {
    setTimeout(function () {
            callback("Let's go to Trip");
        }, 1500);
}
     
getTrip(check);




// function j1(callback){
//     setTimeout(function(){
//         console.log("job1")
//         callback();
//     },2000)
    
// }

// function j2(){
//     console.log("job2");
// }
// j1();
// j2();