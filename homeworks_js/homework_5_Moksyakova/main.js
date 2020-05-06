//_____________1________________
let month=+prompt('Введіть число')

switch(true){
    case month==1 || month == 2 || month ==12: 
        alert('Winter');
        break;
    case month>=3 && month<=5:
        alert('Spring');
        break;
    case month>=6 && month<=8:
        alert('Summer');
        break;
    case month>=9 && month<=11:
        alert('Autumn');
        break;
    default:
        alert('Це неможливо');
        break;
}
//_____________2____________

let n = +prompt('Введіть число');
function prNumber(n){
    let prime = 0;
    for (let i=1; i<=n; i++){
        if (n%i == 0){
            prime++;
        }
    }
    if (prime == 2) return console.log(`${n} - просте число`)
    else return console.log(`${n} - складене число`)
}

prNumber(n);

//___________3_________________

function maxParam(a,b){
    let maxParam=0;
    for(let i = 0; i < arguments.length; i++){
        if(maxParam < arguments[i]){
            maxParam = arguments[i];
        }
    }
    return maxParam;
}
console.log(`Maks number: ${maxParam(32, 8, 125, 361)}`);
