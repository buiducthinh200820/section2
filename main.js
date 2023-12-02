
const arrows = document.querySelectorAll('.fa-solid.fa-chevron-down');
const contents = document.querySelectorAll('.text-2');

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener('click', () => {
    const arrow = arrows[i];
    const content = contents[i];

    if (content.style.display === 'none') {
      content.style.display = 'block';
      arrow.classList.remove('fa-chevron-down');
      arrow.classList.add('fa-chevron-up');
    } else {
      content.style.display = 'none';
      arrow.classList.add('fa-chevron-down');
      arrow.classList.remove('fa-chevron-up');
    }
  });
}