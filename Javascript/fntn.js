function myFunction(num1,num2){ 
    num3=num1*num2;
    return num3
}

mulVal=myFunction(10,20);
console.log(mulVal); 

// function passed as a paramter
function welcome(){
    console.log("Hello World");}
function goodbye(){
    console.log("See you later");
}

function greet(choice){
choice();
}

greet(welcome);
greet(goodbye);

//Anonymous fntn

function greet(choice){
	choice();
}

greet(function(){ console.log("Hello World")}); 

