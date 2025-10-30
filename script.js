// Efecto de corazones y brillos flotando
document.addEventListener("DOMContentLoaded", () => {
  const cantidad = 15;
  for (let i = 0; i < cantidad; i++) {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.body.appendChild(corazon);
  }
});

// Estilo de corazones dinámico
const style = document.createElement("style");
style.innerHTML = `
  .corazon {
    position: fixed;
    bottom: 0;
    color: pink;
    font-size: 20px;
    animation: flotar linear infinite;
    z-index: 10;
  }
  @keyframes flotar {
    from { transform: translateY(0) rotate(0deg); opacity: 1; }
    to { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Crear corazones en movimiento
setInterval(() => {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerText = "💖";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(corazon);
  setTimeout(() => corazon.remove(), 7000);
}, 800);
