document.getElementById('y').textContent = new Date().getFullYear();
const root = document.documentElement, btn = document.getElementById('theme');
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
btn.addEventListener('click', () => {
  const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  root.dataset.theme = cur === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
document.querySelectorAll('.project').forEach(card => card.addEventListener('pointermove', e => {
  const r = card.getBoundingClientRect();
  card.style.setProperty('--x', (e.clientX - r.left) + 'px');
  card.style.setProperty('--y', (e.clientY - r.top) + 'px');
}));
