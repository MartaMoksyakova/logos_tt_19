let getSel = sel => document.querySelector(sel);


let date = getSel('.date');
let timeLine = getSel('.timeLine');

function  getDate() {
   let dateNow = new Date();   
   let month = dateNow.getMonth()+1;
   let year = dateNow.getFullYear();
   let day = dateNow.getDate();
   if(month < 10)  month = '0' + month;
   if(day < 10)  day = '0' + day;
   date.innerText = (`${day}.${month}.${year}`)
}
getDate()

setInterval(function() {
    let time = new Date;
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if(h < 10)  h = '0' + h;
    if(m < 10)  m = '0' + m;
    if(s < 10)  s = '0' + s;
    timeLine.innerText = (`${h}:${m}:${s}`)
}, 1000);
setInterval;

let offset = 0,
  paused = true;
function startStopwatch(event) {
  if (paused) {
    paused = false;
    offset -= Date.now();
    render();
  }
}
function stopStopwatch(event) {
  if (!paused) {
    paused = true;
    offset += Date.now();
  }
}
function resetStopwatch(event) {
  offset = 0;
  paused = true;
  render();
}
document.querySelector(`.loop`).addEventListener(`click`, function() {
	document.querySelector(`.store_box`).innerHTML += document.querySelector(`.stopWatch`).innerHTML + `<br>`;
});
function format(value, scale, modulo, padding) {
  value = Math.floor(value / scale) % modulo;
  return value.toString().padStart(padding, 0);
}

function render() {
  let value = paused ? offset : Date.now() + offset;

  document.querySelector('#s_ms').textContent = format(value, 1, 1000, 3);
  document.querySelector('#s_seconds').textContent = format(value, 1000, 60, 2);
  document.querySelector('#s_minutes').textContent = format(value, 60000, 60, 2);
  document.querySelector('#s_hours').textContent = format(value, 3600000, 60, 2);

  if (!paused) {
    requestAnimationFrame(render);
  }
}
render();

let z = +document.querySelector(`.minute`).innerHTML;
let s1 = 0;
let m1 = z;
let timer = function () {
  z = +document.querySelector(`.minute`).innerHTML;
  m1 = z;
  l2 = setInterval(function () {
    if (s1 == 0) {
      m1--;
      s1 = 59;
      if (m1 < 10) m1 = '0' + m1;
    }
    s1--;
    if (s1 < 10) s1 = '0' + s1;

    document.querySelector(`.timerTime`).innerHTML = `${m1}:${s1}`;
    if (m1 == 0 && s1 == 0) {
      clearTimeout(l2);
    }
  }, 1000);
};


document.querySelector(`.plus`).addEventListener(`click`, function () {
    let n = +document.querySelector(`.minute`).innerHTML;
    n++;
    document.querySelector(`.minute`).innerHTML = n;
  });
  
  document.querySelector(`.minus`).addEventListener(`click`, function () {
    let n = +document.querySelector(`.minute`).innerHTML;
    n--;
    document.querySelector(`.minute`).innerHTML = n;
  });
  
  document.querySelector(`.timerStart`).addEventListener(`click`, function () {
    timer();
    
    
    
  });
  document.querySelector(`.timerStop`).addEventListener(`click`, function () {
    clearTimeout(l2);
    
  });
  document.querySelector(`.timerReset`).addEventListener(`click`, function () {
    document.querySelector(`.timerTime`).innerHTML = `00:00`;
    n = +document.querySelector(`.minute`).innerHTML;
    s1 = 0;
    m1 = n;
    
  });