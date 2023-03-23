// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Перепишите, используя async/await
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson("no-such-user.json").catch(alert); // Error: 404

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Перепишите, используя async/await
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
class HttpError extends Error {
  constructor(response) {
    super(response.status);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let user;
  while (!user) {
    let name = prompt("Введите логин?", "iliakan");
    try {
      user = await loadJson("https://api.github.com/users/${name}");
      alert(`Полное имя: ${user.name}`);
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }
  }
  return user;
}

demoGithubUser();

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Вызовите async–функцию из "обычной"
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function f() {
  wait().then((result) => {
    console.log(result);
  });
}
