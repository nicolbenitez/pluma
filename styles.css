:root {
  --accent: #ff4fa0;
  --pink-bg: #ffd6ea;
  --text: #2b2b2b;
}

/* FONDO ROSA CON ESTRELLAS */
html, body {
  height: 100%;
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: radial-gradient(circle at 20% 20%, #ffeef6 0%, #ffd6ea 20%, #ffc1de 50%, #ffd6ea 100%);
  color: var(--text);
  overflow-x: hidden;
}

.star {
  position: fixed;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: twinkle 2s infinite ease-in-out;
  z-index: 0;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.2); }
}

body.no-stars .star { display: none; }

/* CONTENIDO PRINCIPAL */
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  background: rgba(255,255,255,0.7);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(255,79,160,0.15);
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 1;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.feather {
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 6px 10px rgba(255,79,160,0.2));
  transition: transform 0.5s ease;
}
.feather:hover { transform: rotate(-6deg) scale(1.1); }

.brand h1 {
  font-family: 'Georgia', serif;
  font-size: 48px;
  text-transform: lowercase;
  color: var(--accent);
  margin: 0;
}
.tag {
  font-size: 14px;
  color: #6b4759;
  margin: 0;
}

.maker {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  margin-top: 5px;
}

/* IMÁGENES */
.images {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 20px 0;
}
.images img {
  width: 80px;
  transition: transform 0.3s ease;
}
.images img:hover { transform: scale(1.2) rotate(-8deg); }

/* MENSAJE LINDO */
.message {
  font-size: 16px;
  font-style: italic;
  color: #c14f7a;
  margin: 10px 0 20px;
}

/* PRODUCTOS */
.section-title {
  font-size: 20px;
  margin: 10px 0;
  color: var(--accent);
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}
.product {
  background: rgba(255,255,255,0.8);
  padding: 10px;
  border-radius: 12px;
  width: 140px;
  transition: transform 0.3s ease;
}
.product:hover { transform: scale(1.1); }
.product img { width: 80px; }
.product p { font-size: 13px; margin-top: 5px; }

/* DESCRIPCIÓN */
.description {
  font-size: 16px;
  color: #5b3a44;
  margin: 15px 0;
}

/* REDES SOCIALES */
.socials {
  margin: 15px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.socials a {
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.insta {
  background: #ff7fbf;
  color: white;
}
.whatsapp {
  background: #25D366;
  color: white;
}
.socials a:hover { transform: translateY(-3px); }

/* BOTONES */
.actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}
button {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  padding: 8px 14px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}
button:hover {
  background: var(--accent);
  color: white;
}

/* DISCLAIMER */
.disclaimer {
  font-size: 12px;
  color: #6b4759;
  opacity: 0.8;
  margin-top: 12px;
}

/* RESPONSIVE */
@media (max-width: 600px) {
  .brand h1 { font-size: 36px; }
  .images img { width: 65px; }
  .product { width: 120px; }
}
