// Псевдослучайный генератор
function* pseudoRandom(seed) {
  let previous = seed;
  while (true) {
    let next = (previous * 16807) % 2147483647;
    previous = next;
    yield next;
  }
}

let generator = pseudoRandom(1);
console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
