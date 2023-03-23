try {
  const file = openFile("example.txt");
  // работаем с файлом
} catch (e) {
  console.error("Ошибка:", e);
} finally {
  closeFile(file);
}
