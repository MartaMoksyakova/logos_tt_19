const arr1 = arrCopy([1,2,3]);
const arr2 = arrCopy([1,2,3,[10,20]]);

function arrCopy(arr){
    return arr.slice();    
}
console.log(arr1);
console.log(arr2);

//_____________2_________________


function arrToString(arr) {
    let result = [];
    for (let key in arr) {
        result[key] = arr[key] + ''
    }
    return result
}

const arr = [1, 2, 3]
const arr1 = arrToString(arr)

console.log(arr1)


//_____________3___________________

 function getLength(arr){
    let result = [];
    for (let key in arr) {
        result[key] = arr[key].length
    }
    return result
}

const arr1 = getLength(['Ivan','Pavlo','Ira']);
const arr2 = getLength(['Oleksiy','Andriana']);

console.log(arr1)
console.log(arr2)


//________________4_______________

function removeDuplicates(arr){
    const mySet = new Set(arr);
    return mySet;
    }
    const arr1 = removeDuplicates(['html','javascript','html','css','css','scss','javascript','scss']);
    console.log(arr1)