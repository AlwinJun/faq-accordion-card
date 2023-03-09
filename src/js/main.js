// console.log('test')
document.querySelectorAll('.accordion__question')
.forEach(button => {
    button.addEventListener('click', () =>{
      button.firstElementChild.classList.toggle('show');
      button.firstElementChild.firstElementChild.classList.toggle('show');
      button.nextElementSibling.firstElementChild.classList.toggle('show');
    });
  });