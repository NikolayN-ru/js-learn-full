// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// -------Скрыть элемент по нажатию кнопки-------
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
document
  .querySelector("button")
  .addEventListener(
    "click",
    () => (document.getElementById("text").style.display = "none")
  );

// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// ---------=-=-=-=Спрятать себя=-=-=-=-=--------
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
document
  .getElementById("hideBtn")
  .addEventListener(
    "click",
    () => (document.getElementById("text").style.display = "none"),
    (hideBtn.style.display = "none")
  );

//   Какой обработчик запустится?
// 1 or 2

// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// ---------=Создать раскрывающееся меню=--------
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
const btn = document.querySelector("button");
const menu = document.querySelector("nav ul");
btn.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// ---------=-Добавить кнопку закрытия=-=--------
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
const messages = document.querySelectorAll(".message");
for (let i = 0; i < messages.length; i++) {
  const closeButton = document.createElement("button");
  closeButton.setAttribute("class", "close-button");
  closeButton.textContent = "x";
  closeButton.addEventListener("click", () => messages[i].remove());
  messages[i].insertBefore(closeButton, messages[i].firstChild);
}

// карусель
//  - код в файле ./index.html

