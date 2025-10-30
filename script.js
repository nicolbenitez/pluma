// Tu número y cuenta:
const WHATSAPP_NUMBER = "573026334176";
const INSTAGRAM_URL = "https://www.instagram.com/nicol_.xf";

function whatsappLink(number, text) {
  const base = "https://wa.me/" + number;
  const q = text ? "?text=" + encodeURIComponent(text) : "";
  return base + q;
}

document.getElementById("whatsappBtn").href = whatsappLink(WHATSAPP_NUMBER, "Hola Pluma! Me gustaría información sobre...");
document.getElementById("whatsappContact").href = whatsappLink(WHATSAPP_NUMBER, "Hola Pluma!");
document.getElementById("instaBtn").href = INSTAGRAM_URL;
document.getElementById("instaContact").href = INSTAGRAM_URL;

// Modal de productos
const products = document.querySelectorAll(".product");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

products.forEach(p => {
  p.addEventListener("click", () => {
    modalTitle.textContent = p.dataset.title;
    modalDesc.textContent = p.dataset.desc;
    modal.classList.add("open");
  });
});

closeModal.addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});
