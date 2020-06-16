let borderStyle = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none'];
function randomArr(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        let arr2 = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[arr2]] = [arr[arr2], arr[i]]
      }
   return arr
}
$(document).ready(function() {
 let goDisco = function() {
    let bcgColor = "#"+((1<<24)*Math.random()|0).toString(16);
    let borderRandomWidth =  Math.floor(Math.random()*10)
    $('.ball').css({
        boxShadow: '0px 0px 60px '  + bcgColor,
        border: borderRandomWidth + 'px ' +   randomArr(borderStyle[Math.floor(Math.random()*9)]) +   " #"+((1<<24)*Math.random()|0).toString(16),
    }).animate({
       width: Math.floor(Math.random() * 500 + 10) +'px',
       height: Math.floor(Math.random() * 500 + 10) +'px',
       top: Math.floor(Math.random()*500) + 'px',
       left: Math.floor(Math.random()*1000) +'px',
       backgroundColor: bcgColor,
 }, 500, 'linear')}
 setInterval(goDisco, 800)
})