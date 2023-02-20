// Сумма пользовательских чисел

let a = +prompt("Введите первое число", "");
let b = Number(prompt("Введите второе число", ""));

alert(a + b);

// Как правильно округлить 6.35?
Math.round(6.35 * 10) / 10;

// Ввод числового значения
const infinNumber = () => {
  let number;
  do {
    number = prompt("Введите число", 0);
  } while (!isFinite(number));

  if (number === null || number === "") return null;

  return +number;
};

alert(`number: ${infinNumber()}`);

// Бесконечный цикл по ошибке
let i = 0;
while (i != 10) {
  i += 0.2;
}
// не завершится - из-за потери точности дробей

// Случайное число от min до max
const rand = (min, max) => min + Math.random() * (max - min);

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

// Случайное целое число от min до max
const randomInteger = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));
alert(randomInteger(1, 3));
