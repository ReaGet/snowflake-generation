export default class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 3;
  }

  update() {
    this.x -= 1;
    this.y += (Math.random() * 2 - 1);
  }

  finished() {
    return this.x < 0;
  }

  render(ctx) {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}