// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Dark mode toggle
  const toggle = document.getElementById('toggleTheme');
  let darkMode = false;
  
  toggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.documentElement.style.setProperty('--bg-color', darkMode ? '#121212' : '#ffffff');
    document.documentElement.style.setProperty('--text-color', darkMode ? '#eeeeee' : '#333333');
    document.documentElement.style.setProperty('--header-color', darkMode ? '#000000' : '#222222');
    toggle.textContent = darkMode ? '☀️' : '🌙';
  });
  