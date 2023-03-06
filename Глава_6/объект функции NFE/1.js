// Установка и уменьшение значения счётчика
function makeCounter() {
  let count = 0;

  // ... ваш код ...
  function counter() {
    return count++;
  }
  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

counter.set(10); // установить новое значение счётчика

alert(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert(counter()); // 10 (вместо 11)

// Сумма с произвольным количеством скобок
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6;
sum(6)(-1)(-2)(-3) == 0;
sum(0)(1)(2)(3)(4)(5) == 15;
