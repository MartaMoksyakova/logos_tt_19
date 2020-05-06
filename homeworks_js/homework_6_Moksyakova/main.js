let number = +prompt('Write number');

let fib = num=>{
    for (let i=0, a=1, b=0, sum=1; i<num; i++, sum=a+b, b=a, a=sum){
        console.log(a);
    }
}
fib(number);

//____________________3______________________//

let start = +prompt('Start')
let end = +prompt('End')

for (let i=start;  i<=end; i++) {
  let count = 0;
  for (let j=2; j<i; j++) {
    if (i%j) {
        continue;
    }
    count += 1;
  }
  if (!count) console.log(i);
}
