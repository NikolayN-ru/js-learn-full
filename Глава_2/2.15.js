// Обязателен ли "else"?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}
// my answer
// else не обязателен, при age>18 функция возвращает значение и дольше не выполняется

// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}
// my answer
const checkAge = (age) => (age > 18 ? true : confirm("Родители разрешили?"));
const checkAge = (age) => age > 18 || confirm("Родители разрешили?");

// Функция min(a, b)
function min(a, b) {
  return a > b ? b : a;
}

// Функция pow(x,n)
const pow = (x, n) => {
  if (n < 1) {
    alert(`нужно натуральное число, степень ${n} не подойдет.`);
  }
  return x ** n;
};

// 