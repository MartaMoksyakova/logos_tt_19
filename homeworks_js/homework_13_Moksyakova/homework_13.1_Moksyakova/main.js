let color = document.querySelector(".color");
let image = document.querySelector(".image");

function createContainerColor() {
    let container = document.createElement("div");
    container.classList.add("container");
    for (let i = 0; i < 9; i++) {
      let backgroundColors = [
        "red",
        "blue",
        "violet",
        "green",
        "chocolate",
        "gold",
        "silver",
        "pink",
        "brown",
      ];
      let childBox = document.createElement("div");
    childBox.style.backgroundColor = backgroundColors[i];
    childBox.classList.add("childBox");
    childBox.onclick = function () {
      document.body.style.backgroundColor = backgroundColors[i];
    };
    container.appendChild(childBox);
  }
  document.body.appendChild(container);
}

function createContainerImage() {
  let container = document.createElement("div");
  container.classList.add("container");
  for (let i = 0; i < 9; i++) {
    let backgroundImages = [
      "url(img/1.jpg)",
      "url(img/2.jpg)",
      "url(img/3.jpg)",
      "url(img/4.jpg)",
      "url(img/5.jpg)",
      "url(img/6.jpg)",
      "url(img/7.jpg)",
      "url(img/8.jpg)",
      "url(img/9.jpg)",
    ];
    if (image.onclick) {
        document.body.style.backgroundImage = "none";
      }
    let childBox = document.createElement("div");
    childBox.style.backgroundImage = backgroundImages[i];
    childBox.classList.add("childBox");
    childBox.style.backgroundSize = "cover";
    childBox.onclick = function () {
      document.body.style.backgroundImage = backgroundImages[i];
      document.body.style.backgroundSize = "cover";
    };
    container.appendChild(childBox);
  }
  document.body.appendChild(container);
}

color.onclick = createContainerColor;
image.onclick = createContainerImage;

