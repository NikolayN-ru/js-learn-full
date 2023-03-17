// Какие из этих 3-х команд работают одинаково?
// 1 and 3

//Очистите элемент
const myElement = document.getElementById("my-element");
const clear = (elem) => (elem.innerHTML = "");
clear(myElement);

// Создание списка
let ul = document.createElement("ul");
while (true) {
  let text = prompt("Введите содержимое пункта списка", "");
  if (!text) break;

  let li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// ---------=Создайте дерево из объекта=---------
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
function createTree(container, obj) {
  container.innerHTML += `<ul>`;
  for (let key in obj) {
    let li = document.createElement("li");
    li.innerHTML = key;
    container.querySelector("ul").appendChild(li);
    if (typeof obj[key] == "object") {
      createTree(li, obj[key]);
    }
  }
  container.innerHTML += `</ul>`;
}

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

let container = document.getElementById("container");
createTree(container, data);

// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// ------Выведите список потомков в дереве-------
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
function addCountersToListItems(list) {
  const items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    const sublist = items[i].getElementsByTagName("ul")[0];
    if (!sublist) continue;
    let count = sublist.getElementsByTagName("li").length;
    addCountersToListItems(sublist);
    count += sublist.getElementsByTagName("li").length;
    items[i].insertAdjacentHTML("beforeend", ` [${count}]`);
  }
}
const nestedList = document.querySelector(".nested-list");
addCountersToListItems(nestedList);

// Создайте календарь в виде таблицы
function createCalendar(elem, year, month) {
  const date = new Date(year, month - 1);
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const daysInMonth = new Date(year, month, 0).getDate();
  let dayOfWeek = date.getDay() === 0 ? 6 : date.getDay() - 1;
  let content = `<table>
                    <tr>${weekDays
                      .map((day) => `<th>${day}</th>`)
                      .join("")}</tr>`;
  for (let i = 1; i <= daysInMonth; i++) {
    if (dayOfWeek === 0) content += "<tr>";
    if (i === 1) {
      content += "<td></td>".repeat(dayOfWeek);
    }
    content += `<td>${i}</td>`;
    if (dayOfWeek === 6) content += "</tr>";
    dayOfWeek = (dayOfWeek + 1) % 7;
  }
  if (dayOfWeek !== 0) content += "<td></td>".repeat(7 - dayOfWeek) + "</tr>";
  elem.innerHTML = `${content}</table>`;
}
const cal = document.getElementById("calendar");
createCalendar(cal, 2021, 3);

// Цветные часы с использованием setInterval
setInterval(setClock, 1000);
function setClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let time = hours + ":" + minutes + ":" + seconds;
  let clock = document.getElementById("clock");
  clock.innerHTML = time;
  document.body.style.backgroundColor =
    "rgb(" + hours * 4 + "," + minutes * 4 + "," + seconds * 4 + ")";
}

// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// ---------=-Вставьте HTML в список=-=-=--------
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
const parentLi = document.querySelector("ul");
const firstLi = parentLi.querySelector("li:nth-child(1)");
const newLi1 = document.createElement("li");
newLi1.textContent = "2";
parentLi.insertBefore(newLi1, firstLi.nextElementSibling);
const newLi2 = document.createElement("li");
newLi2.textContent = "3";
parentLi.insertBefore(newLi2, newLi1.nextElementSibling);

//Сортировка таблицы
const usersTable = document.getElementById('users-table');
const rows = Array.from(usersTable.rows).slice(1);
const colIndex = Array.from(usersTable.tHead.rows[0].cells).findIndex(cell => cell.textContent === 'Name');
const getCellValue = (row, index) => row.cells[index].textContent.trim();
const compareValues = (a, b) => {
  /* add elem */ const aVal = getCellValue(a, colIndex);
  const bVal = getCellValue(b, colIndex);
  return aVal.localeCompare(bVal);
}
rows.sort(compareValues);
while (usersTable.rows.length > 1) {
  usersTable.deleteRow(1);
}
for (let i = 0; i < rows.length; i++) {
  usersTable.tBodies[0].appendChild(rows[i]);
}

