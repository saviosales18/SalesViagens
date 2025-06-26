const imgs = document.querySelectorAll('.carousel-img');
const prev = document.querySelector('.carousel-btn.prev');
const next = document.querySelector('.carousel-btn.next');
let idx = 0;

function showImg(i) {
  imgs.forEach((img, j) => img.classList.toggle('active', j === i));
}
prev.onclick = () => { idx = (idx - 1 + imgs.length) % imgs.length; showImg(idx); };
next.onclick = () => { idx = (idx + 1) % imgs.length; showImg(idx); };
// Auto-slide (opcional)
setInterval(() => { idx = (idx + 1) % imgs.length; showImg(idx); }, 10000);