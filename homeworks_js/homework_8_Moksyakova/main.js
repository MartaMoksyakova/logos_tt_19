function getDigits(number){
    console.log(number - Math.floor(number))
}

getDigits(1.25)
getDigits(7.313)
getDigits(100.3)

//-----------3------------

let n = prompt('Введіть число');

function getSqrt(number){
    alert(Math.sqrt(number));
}
if(n == null){
    alert('Будь-ласка, введіть число');
}
else if(n <= 0){
    alert('Введіть додатнє число');
}
else if(n == +n){
    getSqrt(n);
}
else{
    alert('Будь-ласка, введіть число');
}


//-----------2----------------


function getArea(number){
    let s = Math.PI * Math.pow(number, 2);
    alert(`Площа дорівнює ${s} квадратних одиниць.`)

}
let r = prompt('Введіть радіус');
while(r != +r){
    if(r<0){
        alert('Введіть додатнє число')
    }
    else if(r == null){
        alert('Повинно бути числове значення'); 
    }
    else{
        alert('Будь-ласка введіть число')
    }
}
getArea(r);
