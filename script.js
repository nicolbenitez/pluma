// Crear estrellas animadas y permitir apagarlas o encenderlas
document.addEventListener('DOMContentLoaded', () => {
  const toggleStars = document.getElementById('toggleStars');
  const downloadBtn = document.getElementById('downloadBtn');

  // Crear estrellas
  const numStars = 50;
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = ${Math.random() * 3 + 1}px;
    star.style.height = star.style.width;
    star.style.top = ${Math.random() * 100}%;
    star.style.left = ${Math.random() * 100}%;
    star.style.animationDelay = ${Math.random() * 3}s;
    document.body.appendChild(star);
  }

  // Alternar estrellas
  toggleStars.addEventListener('click', () => {
    document.body.classList.toggle('no-stars');
  });

  // Descargar el logo como imagen PNG
  downloadBtn.addEventListener('click', () => {
    const svg = document.querySelector('.feather');
    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svg)], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pluma-logo.svg';
    a.click();
    URL.revokeObjectURL(url);
  });
});
