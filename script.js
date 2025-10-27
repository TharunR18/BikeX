
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});


const accentPicker = document.getElementById('accentColor');
accentPicker.addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--accent-color', e.target.value);
  localStorage.setItem('accentColor', e.target.value);
});


window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const savedAccent = localStorage.getItem('accentColor');

  if (savedTheme === 'dark') document.body.classList.add('dark');
  if (savedAccent) document.documentElement.style.setProperty('--accent-color', savedAccent);
});


const form = document.getElementById('newsletterForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you for subscribing!");
  form.reset();
});
