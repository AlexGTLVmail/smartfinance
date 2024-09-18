console.log("JavaScript файл подключен успешно!");
// ПОДКЛЮЧЕНИЕ КНОПОК
//НА ССЫЛКИ
// document.getElementById('myButton').addEventListener('click', function() {
// window.location.href = 'https://b24-2e5694.bitrix24.site/crm_form_j3w26/';
// });

//НА ЗВОНКИ
document.getElementById('callButton').addEventListener('click', function() {
  window.location.href = 'tel:+79286642202';
});

//НА ЗВОНКИ

// КНОПКИ МОДАЛЬНЫХ ОКОН

// Получаем модальные окна и кнопки

// Получаем все кнопки, которые открывают модальные окна
const buttons = document.querySelectorAll('[data-modal]');
const modalContainer = document.getElementById('modal-container');
const modalContent = document.querySelector('.modal-content');

// Функция для открытия модального окна и загрузки контента
function openModal(modalId) {
    // Подгружаем контент из внешнего файла
    fetch('content_button.html')
        .then(response => response.text())
        .then(data => {
            // Парсим содержимое и вставляем нужный контент
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const modalData = doc.querySelector(`#modal-${modalId}`);
            
            if (modalData) {
                modalContent.innerHTML = modalData.innerHTML;
                modalContainer.style.display = 'flex'; // Показать модальное окно
            } else {
                console.error('Modal content not found');
            }
        })
        .catch(error => console.error('Error loading modal content:', error));
}

// Функция для закрытия модального окна
function closeModal() {
    modalContainer.style.display = 'none'; // Скрыть модальное окно
}

// Добавляем обработчики на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const modalId = event.currentTarget.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Закрытие модального окна по клику на крестик
modalContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
        closeModal();
    }
});

// Закрытие окна при клике вне модального контента
window.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
        closeModal();
    }
});
// КНОПКИ МОДАЛЬНЫХ ОКОН



// ПЫТАЮСЬ ИЗМЕНИТЬ ФОРМУ ЗАЯВКИ НА BITRIX


 // Получаем модальное окно
 var modal = document.getElementById("crmModal");

 // Получаем кнопку, которая открывает модальное окно
 var btn = document.getElementById("open-crm-form");

 // Получаем элемент <span>, который закрывает модальное окно
 var span = document.getElementsByClassName("close")[0];

 // Когда пользователь нажимает на кнопку, открываем модальное окно
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // Когда пользователь нажимает на <span> (x), закрываем модальное окно
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Когда пользователь нажимает в любом месте за пределами модального окна, закрываем его
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }