export default class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1;
    this.n = Math.random() * 150;
  }

  update() {
    this.x -= 1;
    // this.y += (Math.random() * 2 - 1);
    this.y += Math.sin(this.x / this.n) * (Math.random() * 2 - 1);
  }

  finished() {
    return this.x < 0;
  }

  intersects(particles) {
    for (let p of particles) {
      let d = Math.sqrt((p.x - this.x)**2 + (p.y - this.y)**2);
      if (d <= this.r + p.r) {
        return true;
        break;
      }
    }

    return false;
  }

  render(ctx) {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}