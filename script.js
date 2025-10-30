// Mensajes para clientas
const messages = [
  "Tu belleza, escrita con cariño ✨",
  "Siéntete radiante, siempre 💕",
  "Tu estilo, nuestra inspiración 🌸",
  "Brilla con cada trazo 💄",
  "Cada día más hermosa ✨"
];

const msgEl = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const logoSvg = document.getElementById("logoSvg");
const igLink = document.getElementById("igLink");

// Cambiar mensaje aleatorio
changeBtn.addEventListener("click", () => {
  const next = messages[Math.floor(Math.random() * messages.length)];
  msgEl.textContent = next;
});

// Copiar mensaje al portapapeles
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(msgEl.textContent);
    copyBtn.textContent = "¡Copiado!";
    setTimeout(() => (copyBtn.textContent = "Copiar mensaje"), 1400);
  } catch (e) {
    alert("No se pudo copiar. Usa Ctrl/Cmd + C.");
  }
});

// Descargar SVG como PNG
function svgToPngDownload(svgEl, fileName = "pluma-logo.png") {
  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svgEl);
  const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    // mejorar resolución multiplicando por 2
    canvas.width = img.width * 2;
    canvas.height = img.height * 2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2, 2);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, "image/png");
    URL.revokeObjectURL(url);
  };
  img.onerror = () => alert("Error al generar la imagen.");
  img.src = url;
}

downloadBtn.addEventListener("click", () => {
  svgToPngDownload(logoSvg, "pluma-logo.png");
});

// (Opcional) Validaciones o mejoras: si quieres que el botón de Instagram abra un modal o copie tu usuario,
// se puede añadir aquí. También se podría usar una pequeña galería con lightbox.
