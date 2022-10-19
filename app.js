import Particle from "./particle.js";

const W = 500, H = 500;
const canvas = document.querySelector('canvas');
canvas.width = W;
canvas.height = H;

const snowflake = [];

const ctx = canvas.getContext('2d');

let particle = new Particle(W / 2, 0);

function update() {
  particle.update();
  
  if (particle.finished() || particle.intersects(snowflake)) {
    snowflake.push(particle);
    particle = new Particle(W / 2, 0);
  }
}

function render() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, H);
  ctx.save();
  ctx.translate(W/2, H/2);

  particle.render(ctx); 

  snowflake.forEach(p => {
    p.render(ctx);
  })
  
  ctx.restore();
}

setInterval(() => {
  update();
  render();
}, 0.01);