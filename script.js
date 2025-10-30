// Generar estrellitas animadas
const numStars = 70;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('estrella');
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 2 + 's';
  document.body.appendChild(star);
}
