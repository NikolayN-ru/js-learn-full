// Использование "this" в литерале объекта
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат?

// my answer -> undefined

// Создайте калькулятор
let calculator = {
  a: null,
  b: null,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(3, 5);
console.log(calculator.sum());
console.log(calculator.mul());

// Цепь вызовов
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
