
new Splide('.hero-slider', {
  type: 'fade',
  rewind: true,
  arrows: false,
  autoplay: true,
  interval: 7000,
  speed: 3000,
  pauseOnHover: false,
  keyboard: true,
  height: '500px',
}).mount();


let recommendsSlider = new Splide('.recommends-slider', {
  type: 'slide',
  perPage: 3,
  perMove: 3,
  rewind: false,
  arrows: true,
  autoplay: false,
  speed: 1000,
  pauseOnHover: false,
  keyboard: true,
  height: '200px',
  fixedWidth: '390px',
  pagination: false,
}).mount()


new Splide('.reviews-slider', {
  type: 'slide',
  perPage: 5,
  perMove: 1,
  rewind: false,
  arrows: true,
  autoplay: false,
  speed: 1000,
  pauseOnHover: false,
  keyboard: true,
  height: '170px',
  fixedWidth: '280px',
  pagination: false,
}).mount();


const selectDropdownAll = document.querySelectorAll('.select_dropdown');

for (let i = 0; i < selectDropdownAll.length; i++) {
  const selectDropdown = selectDropdownAll[i];

  selectDropdown.addEventListener('click', e => {
    const option = e.target.closest('.select_option');
    const selectValue = selectDropdown.previousElementSibling;
    if (option) {
      selectValue.innerHTML = option.innerHTML;
      e.target.closest('.select-country').blur()
    }
  })
}

/* 
const select = document.querySelector('.select-country');
const selectValue = document.querySelector('.select_value');
selectDropdown.addEventListener('click', e => {
  const option = e.target.closest('.select_option');
  if (option) {
    selectValue.innerHTML = option.innerHTML;
    e.target.closest('.select-country').blur()
  }
}) */


new WOW().init();