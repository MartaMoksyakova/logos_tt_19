let ask = prompt('Введіть текст');
let result = 0;
for(let i = 0; i < ask.length; i++){
    if(ask.charAt(i) == ' '){
        result +=1; 
    }
}
console.log(result)

//___________2_________________

let email = prompt('Write your email');
dog = email.indexOf("@");
	if (dog == -1) {
	alert("Немає символа'@'");
	}
    if(email.indexOf('@') > 0 && email.indexOf('@')< email.length - 1){
        alert('Адрреса електронної пошти введена правильно');
    }
else{
    alert('Неправильний email')
}

//________________3______________


let str = prompt('Write something');
str = str.toLowerCase().split(' ');
let result=0;

for(let i = 0; i < str.length; i++){
        if(str[i] == 'html'){
            result=result+1;
        }
    }
    
    console.log(result);
//_______________4_____________________

let ask = prompt('Write URL adress');

if(ask.indexOf('https://') >= 0){
   console.log(ask.slice(8));
}
else if(ask.indexOf('http://') >= 0){
    console.log(ask.slice(7));
}