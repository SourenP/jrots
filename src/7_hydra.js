s0.init({
    src: p5.canvas
});

osc(11, 0.05, 0.9)
    .rotate(0, 0.05)
    .modulate(osc(20, 0.2, 1.1)
        .rotate(0, -0.01))
    .layer(src(s0)
        .modulate(noise(1, 0.1)))
    .out()