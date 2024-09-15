console.log("JavaScript файл подключен успешно!");
// ПОДКЛЮЧЕНИЕ КНОПОК
//НА ССЫЛКИ
// document.getElementById('myButton').addEventListener('click', function() {
//   window.location.href = 'https://example.com';
// });

//НА ЗВОНКИ
document.getElementById('callButton').addEventListener('click', function() {
  window.location.href = 'tel:+79286642202';
});

// Кнопка для скачивания первого файла
document.getElementById('downloadButton1').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = './files/file1.pdf';  // Путь к первому файлу
  link.download = 'file1.pdf';
  link.click();
});