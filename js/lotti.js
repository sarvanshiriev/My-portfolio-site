lottie.loadAnimation({
    container: document.getElementById('lottie-container'), // Контейнер, в котором будет отображаться анимация
    renderer: 'svg',
    loop: true, // Опционально: установите в false, если хотите, чтобы анимация не повторялась
    autoplay: true,
    path: '/json/sarvan.json', // Путь к загруженному файлу .json
  });