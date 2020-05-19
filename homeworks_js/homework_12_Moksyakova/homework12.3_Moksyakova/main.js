document.body.style.display = 'flex';
document.body.style.justifyContent = 'space-around';

let divs = document.querySelectorAll('div');

divs.forEach(element => {
    element.style.width = '400px';
    element.style.height = '400px';
    element.style.margin = '100px 0 0 0';
    element.style.border = '5px double black';
    element.style.textAlign = 'center';
    
});

for(let i = 0; i < divs.length; i++){
    divs[i].onclick = function(){
        let ask = prompt('Введіть адресу зображення');
        divs[i].style.backgroundImage = `url(${ask})`
        divs[i].style.backgroundSize = 'cover';
    }
}