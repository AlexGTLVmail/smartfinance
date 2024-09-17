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
// document.getElementById('downloadButton1').addEventListener('click', function() {
//   const link = document.createElement('a');
//   link.href = './files/file1.pdf';  
//   link.download = 'file1.pdf';
//   link.click();
// });


// КНОПКИ МОДАЛЬНЫХ ОКОН

// Получаем модальные окна
const modal1 = document.getElementById('profit_growth');
const modal2 = document.getElementById('balance_turnover');
const modal3 = document.getElementById('modal3');

// Получаем кнопки по их уникальным классам
const buttonOne = document.querySelector('.grid-btn_a');
const buttonTwo = document.querySelector('.grid-btn_b');
const buttonThree = document.querySelector('.button-three');

// Функция для открытия модального окна
function openModal(modal) {
    modal.style.display = 'flex';
}

// Функция для закрытия модального окна
function closeModal(modal) {
    modal.style.display = 'none';
}

// Добавляем обработчики на каждую кнопку для открытия соответствующего модального окна
buttonOne.addEventListener('click', () => {
    openModal(modal1);
});

buttonTwo.addEventListener('click', () => {
    openModal(modal2);
});

buttonThree.addEventListener('click', () => {
    openModal(modal3);
});

// Добавляем обработчики на закрытие окна по клику на крестик
modal1.querySelector('.close').addEventListener('click', () => {
    closeModal(modal1);
});

modal2.querySelector('.close').addEventListener('click', () => {
    closeModal(modal2);
});

modal3.querySelector('.close').addEventListener('click', () => {
    closeModal(modal3);
});

// Закрытие окна при клике вне модального контента
window.addEventListener('click', (event) => {
    if (event.target === modal1) {
        closeModal(modal1);
    }
    if (event.target === modal2) {
        closeModal(modal2);
    }
    if (event.target === modal3) {
        closeModal(modal3);
    }
});

// КНОПКИ МОДАЛЬНЫХ ОКОН