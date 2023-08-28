const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value;
  if (value !== '') {
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
    input.value = '';
  }
});