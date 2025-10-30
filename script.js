const messages = [
  "Belleza que ilumina tu día ✨",
  "Siéntete radiante, siempre 💕",
  "Tu belleza, nuestra inspiración 🌸",
  "Un toque de color para tu sonrisa 💄",
  "Brilla hoy y siempre ✨"
];

const msgEl = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const logoSvg = document.getElementById("logoSvg");

changeBtn.addEventListener("click", () => {
  const next = messages[Math.floor(Math.random() * messages.length)];
  msgEl.textContent = next;
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(msgEl.textContent);
    copyBtn.textContent = "¡Copiado!";
    setTimeout(() => (copyBtn.textContent = "Copiar mensaje"), 1400);
  } catch (e) {
    alert("No se pudo copiar. Usa Ctrl+C o Cmd+C.");
  }
});

// Descargar SVG como PNG
function svgToPngDownload(svgEl, fileName = "logo.png") {
  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svgEl);
  const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      a.click();
    });
    URL.revokeObjectURL(url);
  };
  img.src = url;
}

downloadBtn.addEventListener("click", () => {
  svgToPngDownload(logoSvg, "logo-tienda-maquillaje.png");
});
