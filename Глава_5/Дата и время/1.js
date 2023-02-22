// Создайте дату
console.log(new Date(2018, 10, 6, 8, 22));

// Покажите день недели
function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}
let date = new Date(2021, 4, 8);
console.log(getWeekDay(date)); // СБ

// День недели в европейской нумерации
let date2 = new Date(2012, 0, 3);
alert(getLocalDay(date));

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

// Какой день месяца был много дней назад?
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

// Последнее число месяца?
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 0)); // 31
alert(getLastDayOfMonth(2012, 1)); // 29
alert(getLastDayOfMonth(2013, 1)); // 28

// Сколько сегодня прошло секунд?
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}

alert(getSecondsToday());

// Сколько секунд осталось до завтра?
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

// Форматирование относительной даты
function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах
  if (diff < 1000) {
    return "прямо сейчас";
  }
  let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды
  if (sec < 60) {
    return sec + " сек. назад";
  }
  let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + " мин. назад";
  }
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2)); // взять последние 2 цифры из каждой компоненты
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}
alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
alert(formatDate(new Date(new Date() - 86400 * 1000)));
