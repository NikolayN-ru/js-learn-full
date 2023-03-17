// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// ---------=-=-=Создать уведомление=-=-=--------
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
function showNotification(options) {
  const notification = document.createElement("div");
  notification.className = `notification ${options.className || ""}`;
  notification.style.top = (options.top ?? 0) + "px";
  notification.style.right = (options.right ?? 0) + "px";
  notification.innerHTML = options.html;
  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 1500);
}

showNotification({
  top: 10,
  right: 10,
  html: "Hello!",
  className: "welcome",
});
