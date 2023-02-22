// Скопировать и отсортировать массив
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)

//my answer
function copySorted(arr) {
  return [...arr].sort();
}
