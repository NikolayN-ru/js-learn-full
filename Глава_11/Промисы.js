// Код выведет число 1, так как при создании промиса сразу вызывается
//  функция-обработчик, которая вызывает метод resolve с аргументом
//  1. Затем есть задержка в 1 секунду, после которой вызывается метод
//  resolve с аргументом 2, но этот вызов уже не имеет эффекта,
//   так как промис уже был разрешен на первом шаге.

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Задержка на промисах
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
delay(3000).then(() => alert("выполнилось через 3 секунды"));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Анимация круга с помощью промиса
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function showCircle(cx, cy, radius) {
  return new Promise((resolve) => {
    let div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + "px";
    div.style.top = cy + "px";
    div.className = "circle";
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 0);
  });
}

showCircle(150, 150, 100).then((div) => {
  div.classList.add("message-ball");
  div.append("Hello, world!");
});

// Промисы: сравните then и catch
// Короткий ответ: нет, они не эквивалентны