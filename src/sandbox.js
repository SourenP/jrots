// Setup p5
p5.remove()

p5 = new P5((sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
    }
});

// Load font
function fontRead() {
    console.log("font read")
}
noto_sans_arm = p5.loadFont(atom.project.getPaths()[0] + '/assets/fonts/ots_v0.02.ttf', fontRead);

p5.pixelDensity(1);

p5.show()

// Draw text
p5.textFont("Arial");
p5.textAlign('center', 'center');
p5.textSize(400);
p5.text("A", window.innerWidth / 2, window.innerHeight / 2);
p5.fill(0, 255, 255);

p5.ellipse(100, 100, 100, 100)

p5.hide()

p5.clear()

// Add to hydra
s0.init({
    src: p5.canvas
});

// livecode
src(s0)
    .color(1, 1, 1)
    .modulate(osc(12, 0.1).rotate(1, 0.2))
    .diff(
        osc(100, 0.01, 1.5)
        .contrast(0.9)
        .modulate(noise(3, 0.05))
        .rotate(0, 0.05)
    )
    .out(o1)
render(o1);

solid().out(o1)