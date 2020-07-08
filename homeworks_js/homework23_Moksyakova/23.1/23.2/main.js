$(document).ready(function () {
    const time = 60000;
    setTimeout(() => $('.battery').slideUp(time), 0)
    setTimeout(() => $('.battery').slideDown(time), 8)
    function timer() {
        let minutes = 2;
        text = setInterval(function () {
            minutes--
            $('.minutes').text(minutes)
            if (minutes <= 0) clearInterval(text)
        }, time)
    }
    setTimeout(timer, 8)
});