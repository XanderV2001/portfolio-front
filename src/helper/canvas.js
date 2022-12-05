import { random, sortObjectsFromPoint } from "./utils.js";

export class Canvas {
  constructor(ctx, cWidth, cHeight, theme, maxObjects) {
    this.ctx = ctx;
    this.cWidth = cWidth;
    this.cHeight = cHeight;
    this.theme = theme;
    this.objects = [];
    this.maxObjects = maxObjects;
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    // Transparent background
    this.ctx.fillStyle = "rgba(0,0,0,0)";
    this.ctx.fillRect(0, 0, this.cWidth, this.cHeight);
  }

  init() {
    this.clearScreen();

    let amountOfObjects = Math.ceil(
      this.maxObjects / (this.cHeight / this.cWidth)
    );
    console.log(amountOfObjects);

    this.objects = [];
    for (let i = 0; i < amountOfObjects; i++) {
      this.objects.push(
        new Circle(
          this.ctx,
          random(0, this.cWidth),
          random(0, this.cHeight),
          3,
          this.theme
        )
      );
    }
  }

  resize(newWidth, newHeight) {
    this.cWidth = newWidth;
    this.cHeight = newHeight;
    this.init();
  }

  setTheme(theme) {
    this.theme = theme;
    this.objects.forEach((object) => {
      object.color = theme;
    });
  }

  update() {
    this.clearScreen();

    this.objects.forEach((object) => {
      let sorted = sortObjectsFromPoint(this.objects, object);

      let searchRadius = 100;
      let maxSearchItems = this.maxObjects > 20 ? 20 : this.maxObjects;

      for (let i = 0; i < maxSearchItems; i++) {
        let oCompare = sorted[i];
        const isInside =
          Math.pow(oCompare.x - object.x, 2) +
            Math.pow(oCompare.y - object.y, 2) <=
          Math.pow(searchRadius, 2);

        if (isInside) {
          this.ctx.beginPath();
          this.ctx.moveTo(object.x, object.y);
          this.ctx.lineTo(oCompare.x, oCompare.y);
          this.ctx.strokeStyle = "rgba(150, 150, 150, 0.1)";
          this.ctx.stroke();
        }
      }
    });

    this.objects.forEach((object) => {
      object.ensureInView(this.cWidth, this.cHeight);
      object.move();
      object.render();
    });
  }
}

export class Circle {
  constructor(ctx, x, y, r, c) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = c;
    this.moveX = random(-0.5, 0.5);
    this.moveY = random(-0.5, 0.5);
  }

  move() {
    this.x += this.moveX;
    this.y += this.moveY;
  }

  render() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 360);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  ensureInView(viewWidth, viewHeight) {
    if (this.x > viewWidth) this.x = 0;
    if (this.x < 0) this.x = viewWidth;
    if (this.y > viewHeight) this.y = 0;
    if (this.y < 0) this.y = viewHeight;
  }
}
