// Crear estrellitas animadas en el fondo
const numStars = 60;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 2 + 's';
  document.body.appendChild(star);
}
