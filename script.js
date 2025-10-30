// 🌟 Mensaje de bienvenida
window.addEventListener('load', () => {
  setTimeout(() => {
    alert('💖 Bienvenida a Pluma by Dior 💋 — Gracias por brillar con nosotros ✨');
  }, 1000);
});

// 🌸 Efecto de brillo en el logotipo
const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', () => {
  logo.style.textShadow = '0 0 20px #ffb6c1, 0 0 40px #e75480';
});
logo.addEventListener('mouseout', () => {
  logo.style.textShadow = '2px 2px #ffb6c1';
});

// 🌟 Estrellas animadas en el fondo
const createStar = () => {
  const star = document.createElement('div');
  star.classList.add('star
