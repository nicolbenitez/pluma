// Element refs
const downloadBtn = document.getElementById('downloadBtn');
const logoCard = document.getElementById('logoCard');

// Mensaje ya está en el HTML conforme a tu selección.
// Si quieres cambiarlo dinámicamente desde aquí, puedes hacerlo:
// document.querySelector('.tagline').textContent = "Nuevo mensaje aquí";

// Descargar el área del logo (logoCard) como PNG.
// Este método convierte el SVG + estilos visibles en una imagen usando canvas.
// Nota: para incorporar fuentes y estilos complejos, abre la página en un navegador moderno.
function downloadElementAsPng(element, fileName = 'pluma-logo.png') {
  // Serialize the element by creating an SVG foreignObject with the element's HTML.
  const width = element.offsetWidth;
  const height = element.offsetHeight;

  // Inline computed styles for fonts may be necessary to perfectly preserve look.
  const serialized = `
  <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>
    <foreignObject width='100%' height='100%'>
      ${new XMLSerializer().serializeToString(element)}
    </foreignObject>
  </svg>`;

  const blob = new Blob([serialized], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const img = new Image();

  img.onload = () => {
    // increase resolution for better quality
    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    // white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, 'image/png');
    URL.revokeObjectURL(url);
  };

  img.onerror = () => {
    alert('No fue posible generar la imagen. Prueba en Chrome/Edge/Firefox recientes.');
    URL.revokeObjectURL(url);
  };

  img.src = url;
}

downloadBtn.addEventListener('click', () => {
  downloadElementAsPng(logoCard, 'pluma-logo.png');
});
