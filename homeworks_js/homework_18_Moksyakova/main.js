               ////task 1////

const arr = [5,6,7,8,9];
let suma = 0;
arr.forEach(function(val){
    suma += val
})
console.log(suma)

                ////TASK 2////

let numbers = [5, 6, 7, 8, 9];
let sqrt = numbers.map(i => i * i);
console.log(sqrt)

                ///3////

let arr = [
    {
        name: 'Ivan', 
        country: 'Ukraine'
    },
    {
        name: 'Petro', 
        country: 'Ukraine'
    },
    {
        name: 'Miguel', 
        country: 'Cuba'
    }
]

let result = arr.every(val => val.country == 'Ucraine');
console.log(result)


               ////task 4////

let arr = [
    {
        name: 'Ivan', 
        country: 'Ukraine'
    },
    {
        name: 'Petro', 
        country: 'Ukraine'
    },
    {
        name: 'Miguel', 
        country: 'Cuba'
    }
]

let result = arr.some(val => val.country == 'Cuba');
console.log(result)
              
                //task 5/////

let arr = [1, 'string', [3, 4], 5, [6, 7]];
let arr1 = arr.filter( val => Array.isArray(val));
console.log(arr1)

              /////task6/////

let arr = [1, 2, 5, 0, 4, 5, 6];
const suma = arr.reduce(function(accum,value){
    return accum + value
    if (i=[0]) {
        arr.slice
    }
}, 0);
console.log(suma)

//6.2//

let arr = [1, 2, 3, 0, 4, 5, 6];
let count = 0;
const sum = arr.reduce((sum, amount, index, array) => {
  sum += amount;
  if(sum < 10) count++

  return count
  
});

console.log(sum)


                ////task7////

let arr = [1, -2, 0, 4, -5, 6, -11];

arr = arr.filter(user => user > 0);
arr1 = arr.map(i => Math.sqrt(i));
console.log(arr)
console.log(arr1)