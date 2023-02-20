// Проверка на пустоту

let schedule = {};

function isEmpty(obj) {
  for (value in obj) {
    if (value) return false;
  }
  return true;
}

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

// Объекты-константы?
const user = {
  name: "John",
};

// это будет работать?
user.name = "Pete";
// можно - мы меняем св-во внутри объекта, а не сам объект к примеру на строку

// Сумма свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sum(obj) {
  res = 0;
  for (data in obj) {
    res += obj[data];
  }
  return res;
}

console.log(sum(salaries));

// Умножаем все числовые свойства на 2

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (i in obj) {
    if (typeof obj[i] == "number") {
      obj[i] = obj[i] * 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(menu));

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
