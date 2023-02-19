// Что выведет alert (ИЛИ)?
alert(null || 2 || undefined); // 2

// Что выведет alert (ИЛИ)?
alert(alert(1) || 2 || alert(3)); // 1 затем 2

//Что выведет alert (И)?
alert(1 && null && 2); // null

// Что выведет alert (И)?
alert(alert(1) && alert(2)); // 1

// Что выведет этот код?
alert(null || (2 && 3) || 4); // 3

// Проверка значения из диапазона
if (data >= 14 && data <= 90) {
}

// Проверка значения вне диапазона
if (!(data >= 14 && data <= 90)) {
}
if (data < 14 && data > 90) {
}

// Вопрос об "if"
if (-1 || 0) alert("first"); // выполнится (-1)
if (-1 && 0) alert("second"); // не выполнится (0)
if (null || (-1 && 1)) alert("third"); // выполнится (1)

// Проверка логина
let CurrentUser = prompt("Who user?");
if (CurrentUser === "Админ") {
  let password = prompt("пароль_? ");
  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === "" || password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (CurrentUser === "" || CurrentUser === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
