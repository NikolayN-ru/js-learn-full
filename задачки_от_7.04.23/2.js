function calculateString(s) {
  console.log('s:', s);
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = 0;
  let num = "";
  for (let i = 0; i < s.length; i++) {
    console.log('i:', i, 'num:', num, 'result:', result);
    if (!isNaN(s[i])) {
      num += s[i];
    } else {
      if (num) {
        if (result === 0) {
          result = parseInt(num);
        } else if (num.length === 1) {
          result += alphabet.indexOf(num) + 1;
        } else {
          result *= (alphabet.indexOf(num[0]) + 1) * parseInt(num.slice(1));
        }
        num = "";
      }
      result += alphabet.indexOf(s[i]) + 1;
    }
  }
  if (num) {
    if (num.length === 1) {
      result += alphabet.indexOf(num) + 1;
    } else {
      result *= parseInt(num);
    }
  }
  return result;
}

let s = "32bk56c890f";
let result = calculateString(s);
console.log(result);