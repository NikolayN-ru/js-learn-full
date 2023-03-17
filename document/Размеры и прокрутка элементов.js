//Найти размер прокрутки снизу
const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// Узнать ширину полосы прокрутки
function getScrollbarWidth() {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflow = "scroll";
  document.body.appendChild(div);
  const scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}
const scrollbarWidth = getScrollbarWidth();
console.log(scrollbarWidth);

// В чём отличие CSS-свойств width и clientWidth
// getComputedStyle(elem).width получает фактическую вычисленную ширину элемента elem,
//  указанную в CSS, включая paddings, border и scrollbar.

// elem.clientWidth вернет внутреннюю ширину элемента elem, то есть только контент
//  (без учета горизонтальных полос прокрутки, paddings и borders).

