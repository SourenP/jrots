s0.init({
    src: p5.canvas
});

src(s0)
    // .color(1,1,1)
    .modulate(noise(1, 0.05))
    // .modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5)
    // .modulatePixelate(noise(25,0.5),100)
    // .diff(osc(11, 0.05, 1.1).rotate(0, 0.2).modulate(osc(20, 0.2, 1.1).rotate(0, -0.2)))
    .out();
