// Редактируемый div
{
  /* <div id="editable" contenteditable="true">Это текст, который можно редактировать.</div> */
}
const editable = document.querySelector("#editable");
editable.addEventListener("click", function (e) {
  if (e.target.closest("div") === editable) {
    editable.innerHTML = `<textarea>${editable.innerHTML}</textarea>`;
    const textarea = document.querySelector("#editable > textarea");
    textarea.focus();
    textarea.onblur = function () {
      editable.innerHTML = this.value;
    };
    textarea.addEventListener("keydown", function (e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        this.blur();
      }
    });
  }
});

// Редактирование TD по клику
const table = document.querySelector("table");
let inEditMode = false;
let cellInEditMode = null;
table.addEventListener("click", function (event) {
  if (!inEditMode && event.target.nodeName === "TD") {
    const currentValue = event.target.textContent;
    const inputElement = document.createElement("textarea");
    inputElement.classList.add("input-edit");
    inputElement.value = currentValue;
    cellInEditMode = event.target;
    cellInEditMode.innerHTML = "";
    cellInEditMode.appendChild(inputElement);
    inEditMode = true;
  } else if (
    inEditMode &&
    event.target.classList.contains("js-table-button-ok")
  ) {
    cellInEditMode.textContent =
      cellInEditMode.querySelector(".input-edit").value;
    cellInEditMode.removeChild(cellInEditMode.querySelector(".input-edit"));
    inEditMode = false;
    cellInEditMode = null;
  } else if (
    inEditMode &&
    event.target.classList.contains("js-table-button-cancel")
  ) {
    cellInEditMode.removeChild(cellInEditMode.querySelector(".input-edit"));
    cellInEditMode.innerHTML = cellInEditMode.getAttribute("data-prev-content");
    inEditMode = false;
    cellInEditMode = null;
  }
});
function addButtonOkCancel(td) {
  const actionsCell = document.createElement("div");
  actionsCell.classList.add("table-edit-block");
  td.appendChild(actionsCell);
  const okButton = document.createElement("button");
  okButton.textContent = "OK";
  okButton.classList.add("btn", "table-action", "js-table-button-ok");
  actionsCell.appendChild(okButton);
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "CANCEL";
  cancelButton.classList.add("btn", "table-action", "js-table-button-cancel");
  actionsCell.appendChild(cancelButton);
}
for (const row of Array.from(table.querySelectorAll("tr"))) {
  for (const cell of Array.from(row.querySelectorAll("td"))) {
    cell.setAttribute("data-prev-content", cell.innerHTML);
    addButtonOkCancel(cell);
  }
}

// Мышь, управляемая клавиатурой
{
  /* <div id="mouse" style="width: 50px; height: 50px; background-color: blue; position: absolute;"></div> */
}
let mouse = document.getElementById("mouse");
mouse.addEventListener("mousedown", () => {
  mouse.focus();
});
mouse.addEventListener("keydown", (event) => {
  event.preventDefault();
  let x = parseInt(mouse.style.left) || 0;
  let y = parseInt(mouse.style.top) || 0;
  switch (event.key) {
    case "ArrowLeft":
      x -= 10; // двигаем мышь влево
      break;
    case "ArrowRight":
      x += 10; // двигаем мышь вправо
      break;
    case "ArrowUp":
      y -= 10; // двигаем мышь вверх
      break;
    case "ArrowDown":
      y += 10; // двигаем мышь вниз
      break;
  }
  mouse.style.left = x + "px";
  mouse.style.top = y + "px";
});
