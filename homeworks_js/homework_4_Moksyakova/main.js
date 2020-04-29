for(let i=4; i>=0; i--){
    let password = prompt('Password');
    if(password=='1111'){
        alert('Запрошуємо на сайт');
    }
    else if (+i==0){
        alert('Спробуйте зайти пізніше')
    }
    else {
        alert('Пароль невірний спробуйте ще раз. У Вас залишилось спроб  '+i);
    }
    
}
