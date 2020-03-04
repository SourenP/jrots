s0.init({
    src: p5.canvas
});

osc(11, 0.05, 1.2)
    .rotate(0, 0.05)
    .modulate(
        osc(20, 0.1, 1.1)
        .rotate(1, 0.02)
    )
    .layer(
        src(s0)
        .modulate(noise(1, 0.2))
        // .modulatePixelate(noise(25, 0.5), 600)
        // .modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5)
        // .modulateScrollY(osc(10),0.5,0)
        // .modulateScale(osc(2,0.5,0),1,1)
        // .pixelate(300, 300)
        // .color(1,0,1)
    )
    .out()