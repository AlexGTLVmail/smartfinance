//НА ЗВОНКИ
document.getElementById('callButton').addEventListener('click', function() {
    window.location.href = 'tel:+79213328730';
  });


  // Отключаем выделение текста
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Отключаем выделение текста по двойному клику
document.addEventListener('mousedown', function(e) {
    if (e.detail > 1) {
        e.preventDefault();
    }
});