// Две функции - один объект
let data = {
  q: 1,
};
function A() {
  return data;
}
function B() {
  return data;
}

let a = new A();
let b = new B();

console.log(a == b);

// Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {
  this.read = function () {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

