s0.init({src: myp5.canvas});

src(s0)
    .color([1,0,0],[0,1,0],[0,0,1])
    .modulate(noise(1, 0.05))
    .add(osc(14, 0.1, 1).kaleid(4))
    .out();

solid().out();
