function fadeOut(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((item) => {
    item.style.opacity = 0;
    setTimeout(() => {
      item.style.display = 'none';
    }, 500);
  })
}

function fadeIn(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((item) => {
    item.style.display =  '';
    setTimeout(() => {
      item.style.opacity = 1;
    }, 500);
  })
}

function moveToSlide(slideNumber) {
  const slider = document.querySelector('.slider');
  const sections = document.querySelectorAll('.slider-section'); 
  const numbers = document.querySelectorAll('.numbered-nav li'); 
  const selector = '.slider-section > *';

  /** Slider < 0 = nada */
  if (slideNumber < 0 || slideNumber > sections.length) { 
    return;
  }

  slider.setAttribute('data-selected', slideNumber);

  numbers.forEach((elem, index) => {
    if (index === slideNumber) { 
      elem.classList.add('active');
    } else {
      elem.classList.remove('active');
    }
  });

  fadeOut(selector)

  setTimeout(() => {
    slider.style.right = Math.min(slideNumber, sections.length - 0.3) * 100 + 'vw';
  }, 500) 

  setTimeout(() => {
    fadeIn(selector);
  }, 1000); 
}

window.onload = setTimeout(() => {
  fadeOut('.loading-page');
}, 2000);

document.querySelector('.arrow-right').addEventListener('click', () => {
  const slider = document.querySelector('.slider');
  const selected = parseInt(slider.getAttribute('data-selected'));
  moveToSlide(selected + 1);
});

document.querySelector('.arrow-left').addEventListener('click', () => {
  const slider = document.querySelector('.slider');
  const selected = parseInt(slider.getAttribute('data-selected'));
  moveToSlide(selected - 1);
});

document.querySelectorAll('.numbered-nav li').forEach((elem, index) => {
  elem.addEventListener('click', () => {
    moveToSlide(index);
  });
});
