document.getElementById('y').textContent = new Date().getFullYear();

const root = document.documentElement, btn = document.getElementById('theme');
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
btn.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
