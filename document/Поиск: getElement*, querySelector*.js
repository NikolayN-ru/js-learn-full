//Поиск элементов

// 1. Таблица с `id="age-table"`.
let table = document.getElementById("age-table");

// 2. Все label в этой таблице
document.querySelectorAll("#age-table label");

// 3. Первый td в этой таблице
table.getElementsByTagName("td")[0];

// 4. Форма с name="search"
let form = document.getElementsByName("search")[0];

// 5. Первый input в этой форме
form.querySelector("input");

// 6. Последний input в этой форме
let inputs = form.querySelectorAll("input");
inputs[inputs.length - 1];
