import './styles/css/style.css';

// console.log('test')

document.querySelectorAll('.accordion__question').forEach((button) => {
  button.addEventListener('click', () => {
    const acoordionText = button.nextElementSibling.firstElementChild;
    const buttonTag = button.firstElementChild;
    buttonTag.classList.toggle('show');
    buttonTag.firstElementChild.classList.toggle('show');
    acoordionText.classList.toggle('show');

    if (acoordionText.classList.contains('show')) {
      acoordionText.style.height = acoordionText.scrollHeight / 16 + 'rem';
    } else {
      acoordionText.style.height = '0rem';
    }
  });
});

