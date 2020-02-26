s0.init({src: p5.canvas});

src(s0)
    .color(1,1,1)
    .modulate(noise(1, 0.05))
    .diff(osc(12, 0.05, 1.1).rotate(0, 0.1).modulate(noise(4, 0.5, 12)))
    .out();
