<html>
  <body>
    <div>Пользователи:</div>
    <ul>
      <li>Джон</li>
      <li>Пит</li>
    </ul>
  </body>
</html>;

// dev
const el = document.body.children[0];

//ul
let ul = document.body.lastElementChild;

//li
let li = document.body.lastElementChild.lastElementChild;

//Выделите ячейки по диагонали
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}
