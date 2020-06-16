$(document).ready(function () {
    $('.element').on('click',function(){
        $('.element').animate({
        width: Math.floor(Math.random() * 500 + 20) +'px',
        height: Math.floor(Math.random() * 500 + 20) +'px',
        top: Math.floor(Math.random()*500) + 'px',
        left: Math.floor(Math.random()*1000) +'px',
        backgroundColor: "#"+((1<<24)*Math.random()|0).toString(16),   
}, 1000, 'easeInOutBack')})
})