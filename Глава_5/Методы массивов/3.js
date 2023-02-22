// Фильтрация по диапазону "на месте"

function filterRangeInPlace(arr, a, b) {
  arr = arr.filter((element) => {
    return element < a || element > b;
  });
  console.log(arr);
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
