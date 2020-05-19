document.body.style.backgroundColor = prompt('Задайте фон');
document.body.style.fontStyle = prompt('Задайте шрифт');


let h = document.querySelector('h1');
h.style.textAlign = prompt('Задайте розташування заголовка');
let p = document.querySelector('p');
p.style.backgroundColor = prompt('Задайте фон для параграфа з посиланнями');
p.style.color = prompt('Задайте колір тексту для параграфа з посиланнями');



for (let i=0; i<3; i++){
    let link = document.createElement('a');
    link.innerText= prompt(`Введіть адресу ${i+1}го сайту`);
    p.appendChild(link).href = `${link.innerText}`;
    link.innerText += ' ';
    link.style.color = prompt(`Введіть колір посилання ${i+1}го сайту`);
    link.target = '_blank';
}

let div = document.querySelector('div');
div.style.fontSize = prompt('Задайте розмір тексту');
div.style.fontWeight = prompt('Задайте жирність тексту');
div.style.color = prompt('Задайте колір тексту для div');



let ul = document.querySelector('ul');
ul.type = prompt('Задайте тип маркера для маркованого списку');