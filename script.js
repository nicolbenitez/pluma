document.getElementById('year').textContent = new Date().getFullYear();

const addBtns = document.querySelectorAll('.add');
addBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Agregado ✓';
    setTimeout(() => btn.textContent = 'Agregar', 1400);
  });
});
