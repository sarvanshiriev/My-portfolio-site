//Скилы

function openModal(imgElement) {
    const modal = document.getElementById('section__modal');
    const modalImage = document.getElementById('modalImage');

    // Установка увеличенного изображения в модальное окно
    modalImage.src = imgElement.src;

    // Отображение модального окна
    modal.style.display = 'block';

    // Добавляем обработчик события для закрытия модального окна при клике в пустое пространство
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Добавляем обработчик события для закрытия модального окна при нажатии на кнопку Esc
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}
  
  // Определение функции для закрытия модального окна
  function closeModal() {
    const modal = document.getElementById('section__modal');
  
    // Скрытие модального окна
    modal.style.display = 'none';

    // Удаляем обработчики событий для закрытия модального окна
     modal.removeEventListener('click', closeModal);
     document.removeEventListener('keydown', closeModal);
  }
  
  // Получаем все изображения из списка
  const images = document.querySelectorAll('.section__img');
  
  // Добавляем обработчик события клика к каждому изображению
  images.forEach((img) => {
    img.addEventListener('click', () => {
        openModal(img); // Передаем текущее изображение для увеличения
    });
  });
  
  // Получаем кнопку закрытия модального окна
const closeButton = document.querySelector('.button-close');

// Добавляем обработчик события клика к кнопке закрытия
closeButton.addEventListener('click', () => {
    closeModal();
});