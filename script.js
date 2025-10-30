document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('phraseSelect');
  const tagline = document.getElementById('tagline');

  select.addEventListener('change', function() {
    tagline.textContent = this.value;
    tagline.animate([
      { filter: 'brightness(1)', transform: 'translateY(0) scale(1)' },
      { filter: 'brightness(1.25)', transform: 'translateY(-4px) scale(1.02)' },
      { filter: 'brightness(1)', transform: 'translateY(0) scale(1)' }
    ], { duration: 500, easing: 'ease-out' });
  });

  // Animación de los íconos al hacer clic
  const svg = document.querySelector('.icon-set');
  if (svg) {
    svg.addEventListener('click', () => {
      svg.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(6deg)' },
        { transform: 'rotate(-4deg)' },
        { transform: 'rotate(0deg)' }
      ], { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)' });
    });
  }
});
