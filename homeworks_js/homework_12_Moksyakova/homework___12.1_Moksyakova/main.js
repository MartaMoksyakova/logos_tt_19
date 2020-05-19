let div = document.querySelector('div');
div.style.width = '300px';
div.style.height = '300px';
div.style.backgroundColor = 'purple';
div.style.margin = '0 auto';
div.style.border = '3px solid black';

let i = 0;
let bcgColor = ['red', 'yellow', 'green'];

div.onmouseover = function(){
    this.style.backgroundColor = bcgColor[i];
    i++;
    if(i >= bcgColor.length){
        i = 0;
    }
}
div.onmouseout = function(){
    this.style.backgroundColor = 'purple';
}