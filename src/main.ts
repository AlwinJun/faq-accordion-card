import './styles/css/style.css';

// console.log('test')

const questions = document.querySelectorAll('.accordion__question') as NodeListOf<HTMLHeadingElement>;

questions.forEach((accordionQuestion: HTMLHeadingElement) => {
  accordionQuestion.addEventListener('click', handleClick);
});

function handleClick(event: Event) {
  const accordionQuestion = event.currentTarget as HTMLHeadingElement;
  const accordionContent = accordionQuestion.nextElementSibling?.firstElementChild as HTMLParagraphElement;
  const buttonTag = accordionQuestion.firstElementChild as HTMLButtonElement;
  const spanElement = buttonTag.firstElementChild as HTMLSpanElement;

  buttonTag.classList.toggle('show');
  spanElement.classList.toggle('show');
  accordionContent.classList.toggle('show');

  const scrollHeight: number = accordionContent.scrollHeight;
  accordionContent.style.height = accordionContent.classList.contains('show') ? `${scrollHeight / 16}rem` : '0rem';
}

