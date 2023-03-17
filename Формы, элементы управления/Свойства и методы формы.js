// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// Добавьте пункт к выпадающему списку
let select = document.getElementById("genres");
let newOption = document.createElement("option");
newOption.text = "Джаз";
newOption.value = "jazz";
select.options.add(newOption);
