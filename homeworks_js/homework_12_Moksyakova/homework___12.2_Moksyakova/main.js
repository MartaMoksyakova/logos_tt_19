let div = document.querySelector('div');
div.style.width = '400px';
div.style.height = '400px';
div.style.margin='0 auto';

div.onmouseout = function() {
    this.style.backgroundColor = 'purple';
    this.style.color = 'black';
    this.innerText = 'У мене є секрет!';
    this.style.fontSize='20px'
}
div.onmouseover = function() {
    this.style.backgroundColor = 'blue';
    this.style.color = 'black';
    this.style.border = '5px double pink';
    this.innerText = 'Хочеш знати який?';
    this.style.fontSize='20px'
}
div.onmousedown = function() {
    this.style.backgroundColor = 'black';
    this.style.color = 'white';
    this.style.border = '5px double yellow';
    this.innerText = 'А я тобі не скажу!';
    this.style.fontSize='20px'
}
div.onmouseup = function() {
    this.style.backgroundColor = 'blue';
    this.style.color = 'black';
    this.style.border = '5px double pink';
    this.innerText = 'Хочеш знати який?';
    this.style.fontSize='20px'
}

