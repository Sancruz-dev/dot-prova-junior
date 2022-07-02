function display_image(className, src, title, alt) {
  let figure = document.querySelector('.art__figure')
  let img = document.createElement("img");
  img.className = className;
  img.src = src;
  img.title = title;
  img.alt = alt;
  figure.appendChild(img);
}

display_image(
  'art__img',
  './assets/img/banner.png',
  'Ilustração da natureza e sua beleza',
  'JavaScriptImage'
)

for (let i = 0; i < 2; i++) {
  const secOne = document.querySelector('.sec-one')
  const secContainer = document.querySelector('.sec-one__container')
  const elementoClone = secContainer.cloneNode(true);

  secOne.appendChild(elementoClone);
}