const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  updateToggleButton('dark');
} else {
  updateToggleButton('light');
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  if (isDark) {
    localStorage.setItem('theme', 'dark');
    updateToggleButton('dark');
  } else {
    localStorage.setItem('theme', 'light');
    updateToggleButton('light');
  }
}

function updateToggleButton(mode) {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.textContent = mode === 'dark' ? '☀️ Light' : '🌙 Dark';
}