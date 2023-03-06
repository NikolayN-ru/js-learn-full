function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(100));
