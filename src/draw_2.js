// import VNote from "vnote.module.js";

MIDI_ON_CMD = 144;
MIDI_OFF_CMD = 128;

MARGIN = 0.3;

vnotes = new Array(128);
for (let i = 0; i < vnotes.length; i++) {
    vnotes[i] = new VNote(i);
}

// p5.remove()

p5 = new P5((sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
    }
});

p5.pixelDensity(1);
p5.hide()

// Define draw letter
drawMidi = function(command, note, velocity) {
    if (command === undefined || note === undefined) {
        return;
    }

    var vnote = vnotes[note];
    if (command === MIDI_ON_CMD) {
        if (vnote.getDisplay() == false) {
            vnote.reset(window.innerWidth, window.innerHeight, MARGIN);
        }
        vnote.setDisplay(true);
    } else if (command == MIDI_OFF_CMD) {
        vnote.setDisplay(false);
    } else {
        console.log("Unknown command");
    }
}

// p5 draw loop
p5.draw = () => {
    p5.clear();
    for (let i = 0; i < vnotes.length; i++) {
        vnotes[i].draw(p5);
    }
}