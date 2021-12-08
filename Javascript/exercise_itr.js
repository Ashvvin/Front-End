
let c = " ";

for (let i = 1; i <= 5; i++) {
  
  for (let j = 1; j <= i; j++) {
    c += j ;
    
  }
   c += "\n";
}
console.log(c);


let v = "";

for (let i = 5; i >= 0; i--) {
  
  for (let j = 5; j >= i; j--) {
    v += j;
  }
   v += "\n";
}
console.log(v);

let x = "";

for (let i = 1; i <= 5; i++) {
  
  for (let j = 1; j <= i; j++) {
    x += i;
  }
   x += "\n";
}
console.log(x);





let s = "";
count = 1;
for (let i = 1; i <= 4; i++) {
  
  for (let j = 1; j <= i; j++) {
    s += count;
    count++;
    
  }
   s += "\n";
}
console.log(s);