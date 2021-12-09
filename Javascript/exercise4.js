let message = "Albert Einstein was born in Ulm, on 14/03/1879.";
let reg = /\d{1,2}\/\d{1,2}\/\d{4}/;
let exp = message.search(reg);
console.log(message.substring(exp)); 


let exp1=/^[\w]+\.[\d\W\d]+@[a-z]+\.(com|in)$/
if(exp1.test('JohnDoe.12#4@gmail.com')) {
    console.log('Matches the Pattern');
}
else
{
    console.log('Not matching');


}

