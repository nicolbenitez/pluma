(function() {
  // Copiar número de WhatsApp
  const copyBtn = document.getElementById('copy-wa');
  const waLink = document.getElementById('wa-link');
  if (copyBtn && waLink) {
    copyBtn.addEventListener('click', function() {
      const text = waLink.textContent.trim();
      navigator.clipboard?.writeText(text).then(() => {
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => copyBtn.textContent = 'Copiar', 1500);
      }).catch(() => {
        alert('Copia manual: ' + text);
      });
    });
  }

  // Animación del logo al cargar
  window.addEventListener('load', () => {
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.style.transform = 'translateY(-8px) rotate(-6deg)';
      logo.style.transition = 'transform 650ms cubic-bezier(.2,.9,.2,1)';
      setTimeout(() => logo.style.transform = 'translateY(0) rotate(0)', 80);
    }
  });
})();
