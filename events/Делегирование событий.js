// Спрячьте сообщения с помощью делегирования
const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const message = event.target.parentElement;
    message.remove();
  });
});

// Раскрывающееся дерево
const titles = document.querySelectorAll("#tree .title");
titles.forEach((title) => {
  title.addEventListener("click", (event) => {
    const parent = event.target.parentElement;
    if (parent.querySelector("ul")) {
      const childList = parent.querySelector("ul");
      childList.style.display =
        childList.style.display === "none" ? "block" : "none";
    }
  });
});

// Сортируемая таблица
function sortTable(table, columnIndex, type) {
  let rows = Array.from(table.tBodies[0].rows);
  function compareValues(a, b) {
    let cellA = a.cells[columnIndex];
    let cellB = b.cells[columnIndex];
    if (type === "number") {
      return +cellA.textContent - +cellB.textContent;
    } else if (type === "string") {
      return cellA.textContent.localeCompare(cellB.textContent);
    }
  }
  rows.sort(compareValues);
  for (let row of rows) {
    table.tBodies[0].appendChild(row);
  }
}
let tableHeaders = document.querySelectorAll("#grid th");
for (let i = 0; i < tableHeaders.length; i++) {
  tableHeaders[i].addEventListener("click", function () {
    let table = this.closest("#grid");
    let columnIndex = this.cellIndex;
    let type = this.dataset.type;
    sortTable(table, columnIndex, type);
  });
}

// Поведение "подсказка"
const tooltip = document.getElementById("tooltip");
document.addEventListener("mouseover", (e) => {
  const target = e.target;
  const tooltipText = target.getAttribute("data-tooltip");
  if (tooltipText) {
    tooltip.innerHTML = tooltipText;
    tooltip.style.left = `${e.clientX}px`;
    tooltip.style.top = `${e.clientY}px`;
    tooltip.classList.add("active");
  }
});

document.addEventListener("mouseout", (e) => {
  tooltip.classList.remove("active");
});
