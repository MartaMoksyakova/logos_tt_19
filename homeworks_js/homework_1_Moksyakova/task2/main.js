let name = prompt('Your name');
let heightMainDiv = prompt('Main div height');
let widthMainDiv = prompt('Main div width');
let bgMainDiv = prompt('Main div background');
let heightSecondDiv = prompt('Second div height');
let widthSecondDiv = prompt('Second div width');
let bgSecondDiv = prompt('Second div background');
let display = 'flex';
let margin = 'auto';
let center = 'center';
let space = 'center';
let column = 'column';
let bgSize = 'cover';
document.write(`<div style="margin:${margin};display:${display};flex-direction:${column};
align-items:${center};justify-content:${space};width:${widthMainDiv}px;height:${heightMainDiv}px;
background:${bgMainDiv};"><div style="width:${widthSecondDiv}px;height:${heightSecondDiv}px;
background-image:url(${bgSecondDiv});background-size:${bgSize};"></div><h3>Welcome,${name}</h3></div>`)


  
