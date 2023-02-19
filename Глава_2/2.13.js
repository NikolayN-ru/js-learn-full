// Последнее значение цикла
let i = 3;

while (i) {
  alert(i--);
} // 1 используется постфикс while пропустит значение i=1

// Какие значения выведет цикл while?
let i = 0;
while (++i < 5) alert(i);

let i = 0;
while (i++ < 5) alert(i);
//  разные -> 1) 1,2,3,4
//            2) 1,2,3,4,5

// Какие значения выведет цикл for?
for (let i = 0; i < 5; i++) alert(i); // 0,1,2,3,4
for (let i = 0; i < 5; ++i) alert(i); // 0,1,2,3,4
// одинаковые

// Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i < 12; i += 2) alert(i);

// Замените for на while
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Повторять цикл, пока ввод неверен

let data;
do {
  data = prompt("Введите число больше 100", 0);
} while (data <= 100 && data);

// Вывести простые числа
let Number = 10;

mark: for (let i = 2; i <= Number; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue mark;
  }
  alert(i);
}
