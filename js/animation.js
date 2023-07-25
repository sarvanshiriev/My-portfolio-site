if (window.innerWidth < 768) {
    const elements = document.querySelectorAll('.header__description');
    elements.forEach(element => {
      element.classList.add('animate__animated');
      element.classList.add('animate__wobble');
    });
}

function startAnimation() {
    document.querySelector('.header__description').style.visibility = 'visible';
}

setTimeout(startAnimation, 4100);



