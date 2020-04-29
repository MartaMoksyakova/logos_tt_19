let n = +prompt('number')

for(let i = 1; i <= n; i++){
    console.log(i)
}
//--------2-----------


for(let i = 1000; i <= 9999; i+=3){
    console.log(i)
}
//----------3----------

for (let i = 1, j = 0; j <=55; i += 2, j++)
   console.log(i + " ");
//---------4----------

for (let i = 90; i >= 0; i-=5)
   console.log(i + " ");

//---------5----------

for (let i = 2, j = 0; j < 20; j++, i <<= 1)
   console.log(i + " ");

//--------6-----------

let a, i = 1;
while ((a = (i <<= 1) || 1) < 10000) {
   console.log(a + " ");
}

//-----------7----------

let i, a = -166;
for (i = (a++ << 1) + 200; i < 100; a++) {
   if (i > -100)
      console.log(i);
   i = (a++ << 1) + 200;
}

//-----------8------------

let number = +prompt('number')
let step = +prompt('step')

let result = 1;

if(step==0){
    for(let i = 0; i <= step; i++){
        result = result * number
    }
}
if(step>0){
    for(let i = 1; i <= step; i++){
        result = result * number
    }
}
else if(step<0){
    step = -step
    for(let i = 1; i <= step; i++){
        result = result * number
    }
    result = 1/result
}
console.log(result)