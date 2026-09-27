const root = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && matchMedia('(prefers-color-scheme: dark)').matches)) root.classList.add('dark');

document.querySelector('.theme-toggle').addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
});

document.querySelectorAll('.project-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project');
    const isOpen = card.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('.plus').textContent = isOpen ? '−' : '+';
  });
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
