// Сделать первый символ заглавным
const ucFirst = (str) =>
  console.log(str[0].toUpperCase() + str.substr(1, str.length));
ucFirst("вася");

// Проверка на спам
const checkSpam = () =>
  str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx");
checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;

// Усечение строки
const truncate = (str, maxlength) =>
  str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);

// Выделить число
const extractCurrencyValue = (str) => +str.slice(1);
console.log(extractCurrencyValue("$120") === 120); // true
