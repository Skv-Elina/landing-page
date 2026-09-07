let swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 400,
    freeMode: true,
    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
                ' из ' +
                '<span class="' + totalClass + '"></span>';
    }
    },
    navigation: {
        nextEl: ".gallery__btn-next",
        prevEl: ".gallery__btn-prev"
    },
    breakpoints: {
      62: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".gallery__pagination",
            type: "bullets",
        }
      },
  
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".gallery__pagination",
            type: "bullets",
        }
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".gallery__pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
        }
        },
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".gallery__pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' +
                      ' из ' +
                      '<span class="' + totalClass + '"></span>';
          }
          },
      },
    },
  });

const form = document.querySelector('.contact__form');

const nameInput = document.querySelector('.form__input-name');
const emailInput = document.querySelector('.form__input-email');

const nameError = document.querySelector('.form__error-name');
const emailError = document.querySelector('.form__error-email');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Сбрасываем предыдущие ошибки
    nameError.textContent = '';
    emailError.textContent = '';

    nameInput.classList.remove('error');
    emailInput.classList.remove('error');

    // Регулярные выражения
    const nameRegex = /^[А-Яа-яЁё]+(?:\s+[А-Яа-яЁё]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Проверка имени
    if (name === '') {
        nameError.textContent = 'Заполните поле';
        nameInput.classList.add('error');
        isValid = false;
    } else if (
        name.length < 2 ||
        name.length > 30 ||
        !nameRegex.test(name)
    ) {
        nameError.textContent = 'Недопустимый формат';
        nameInput.classList.add('error');
        isValid = false;
    }

    // Проверка email
    if (email === '') {
        emailError.textContent = 'Заполните поле';
        emailInput.classList.add('error');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Недопустимый формат';
        emailInput.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        console.log('Форма заполнена корректно');
    }
});




