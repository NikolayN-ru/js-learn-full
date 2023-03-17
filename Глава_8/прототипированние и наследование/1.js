// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// // Object.keys возвращает только собственные ключи
// alert(Object.keys(rabbit)); // jumps

// // for..in проходит и по своим, и по унаследованным ключам
// for (let prop in rabbit) alert(prop); // jumps, затем eats

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// alert(rabbit.jumps); // ? true

// delete rabbit.jumps;

// alert(rabbit.jumps); // ? null

// delete animal.jumps;

// alert(rabbit.jumps); // ? undefined

// // Алгоритм поиска
// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// alert(pockets.pen); // 3
// alert(bed.glasses); // 1
// alert(table.money); // undefined

// // Куда будет произведена запись?
// let animal = {
//   eat() {
//     this.full = true;
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.eat();
// //   Ответ: rabbit.

// Почему наедаются оба хомяка?
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
