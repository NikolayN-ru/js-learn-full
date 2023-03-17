// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// Найдите координаты точек относительно окна браузера
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
let circles = document.querySelectorAll(".circle");
for (let i = 0; i < circles.length; i++) {
  let coords = getElementCoords(circles[i]);
  console.log(coords);
}
function getElementCoords(elem) {
  let box = elem.getBoundingClientRect();
  let body = document.body;
  let docEl = document.documentElement;
  let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  let clientTop = docEl.clientTop || body.clientTop || 0;
  let clientLeft = docEl.clientLeft || body.clientLeft || 0;
  let top = box.top + scrollTop - clientTop;
  let left = box.left + scrollLeft - clientLeft;
  return {
    top: top,
    left: left,
    right: left + elem.offsetWidth,
    bottom: top + elem.offsetHeight,
  };
}
