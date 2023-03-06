// Независимы ли счётчики?
// независимы - 0,1

// Объект счётчика
// 1 2 1

// Функция в if
// error

// Сумма с помощью замыканий
function sum(x) {
  return function (y) {
    return x + y;
  };
}
console.log(sum(1)(2));

//Фильтрация с помощью функции
// Фильтр inBetween
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2.filter(inBetween(3, 6))); // 3,4,5,6

// Фильтр inArray
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr3 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr3.filter(inArray([1, 2, 10]))); // 1,2

// Сортировать по полю
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

users.sort(byField("name"));
users.forEach((user) => console.log(user.name)); // Ann, John, Pete

users.sort(byField("age"));
users.forEach((user) => console.log(user.name)); // Pete, Ann, John

//Армия функций
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      console.log(j);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
