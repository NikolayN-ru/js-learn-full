function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

// delete rabbit.eats;   -- false
// delete Rabbit.prototype.eats;  --- true
alert(rabbit.eats); // true

// Создайте новый объект с помощью уже существующего
function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User("John");
let user2 = new user.constructor("Pete");

alert(user2.name); // undefined
