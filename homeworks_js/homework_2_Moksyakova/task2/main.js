let name = prompt('Введіть імя');
let password;
if(name =='імя'){
    password = prompt('Ваш пароль');
}
else if(name == null){
    alert('Вхід скасований');
}
else{
    alert('Я вас не знаю');
}

if(password =='логос'){
    alert('Ласкаво просимо');
}
else if(password == null){
    alert('Вхід скасований');
}
else{
    alert('Пароль невірний');
}