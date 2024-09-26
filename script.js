

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




