// Модальное диалоговое окно с формой
function showPrompt(html, callback) {
  var form = document.createElement("form");
  form.style.cssText =
    "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);";
  form.innerHTML =
    '<p style="margin-bottom: 10px">' +
    html +
    '</p><input type="text" name="value" style="margin-right: 10px"><button type="submit">OK</button><button type="button" onclick="closePrompt()">CANCEL</button>';
  document.body.appendChild(form);
  var input = form.elements.value;
  input.focus();
  input.select();
  form.addEventListener("keydown", function (event) {
    if (event.keyCode === 9) {
      event.preventDefault();
      var target =
        event.target.nextElementSibling ||
        event.target.parentElement.firstElementChild;
      target.focus();
      if (target.tagName !== "INPUT") {
        target.select();
      }
    }
  });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    closePrompt();
    callback(input.value);
  });
  var closeButton = form.querySelector("button[type=button]");
  closeButton.addEventListener("click", function () {
    closePrompt();
    callback(null);
  });
  function closePrompt() {
    document.body.removeChild(form);
  }
}
showPrompt("Введите ваше имя:", function (value) {
  if (value) {
    alert("Привет, " + value + "!");
  } else {
    alert("Вы не ввели имя.");
  }
});
