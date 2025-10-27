const themeToggle = document.getElementById('themeToggle');
const accentPicker = document.getElementById('accentColor');
const newsletterForm = document.getElementById('newsletterForm');


// Theme Management

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const savedAccent = localStorage.getItem('accentColor');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    updateThemeToggleButton(true);
  }

  if (savedAccent) {
    document.documentElement.style.setProperty('--accent-color', savedAccent);
    accentPicker.value = savedAccent;
  }
}

/**
 * Update theme toggle button appearance
 * @param {boolean} isDark - True if dark mode is active
 */
function updateThemeToggleButton(isDark) {
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeToggleButton(isDark);
});


// Accent Color Management
accentPicker.addEventListener('input', (event) => {
  const color = event.target.value;
  document.documentElement.style.setProperty('--accent-color', color);
  localStorage.setItem('accentColor', color);
});


// Form Handling

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;
    alert('Thank you for subscribing! 🎉');
    newsletterForm.reset();
  });
}


// Initialization

document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
});
