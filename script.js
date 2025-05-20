const canvas = document.getElementById('kaleidoCanvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const saveBtn = document.getElementById('saveBtn');
saveBtn.onclick = () => {
  const link = document.createElement('a');
  link.download = 'kaleido_art.png';
  link.href = canvas.toDataURL();
  link.click();
};

const colors = ['#a52a2a', '#023b78', '#8a2be2', '#FF8800', '#00FF00', '#FF0080'];
const symmetry = 12;

function drawKaleido(x, y) {
  const angle = (2 * Math.PI) / symmetry;
  const radius = Math.random() * 40 + 20;
  const color = colors[Math.floor(Math.random() * colors.length)];

  for (let i = 0; i < symmetry; i++) {
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate(i * angle);
    ctx.translate(x - width / 2, y - height / 2);

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.7;
    ctx.fill();
    ctx.restore();
  }
}

canvas.addEventListener('click', (e) => {
  drawKaleido(e.clientX, e.clientY);
});

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});