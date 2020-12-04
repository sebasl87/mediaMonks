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
  const sections = document.querySelectorAll('.slider-section'); // grab all the titles
  const numbers = document.querySelectorAll('.numbered-nav li'); // grab all the numbers
  const selector = '.slider-section > *';

  if (slideNumber < 0 || slideNumber > sections.length) { // if the slide is minor than zero, or greater than the total amount of slides
    return; // early return, do nothing
  }

  slider.setAttribute('data-selected', slideNumber);

  numbers.forEach((elem, index) => {
    if (index === slideNumber) { // if it's the same index as the slide number
      elem.classList.add('active'); // add active class
    } else {
      elem.classList.remove('active'); // else remove it
    }
  });

  fadeOut(selector) // hide the text inmediately

  setTimeout(() => {
    slider.style.right = Math.min(slideNumber, sections.length - 0.3) * 100 + 'vw';
  }, 500) // slide to desired slideNumber after 500ms (we've hidden the titles)

  setTimeout(() => {
    fadeIn(selector);
  }, 1000); // fadeIn the titles after 1000ms (500ms from hiding the titles and 500ms sliding)
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
