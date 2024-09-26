// ФОРМА ЗАЯВКИ НА BITRIX
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
