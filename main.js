const menuButtons = document.querySelectorAll('.btn');
const menuSections = document.querySelectorAll('.menu');

menuButtons.forEach((button, index) => {
   button.addEventListener('click', () => {
      menuSections.forEach(section => {
         section.classList.add('section-off');
      })

      if(menuSections[index]) {
         menuSections[index].classList.remove('section-off');
      }

      menuButtons.forEach(btn => btn.classList.remove('btn-on'));
      button.classList.add('btn-on');
   })
});