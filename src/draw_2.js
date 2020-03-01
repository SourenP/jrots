MIDI_ON_CMD = 144;
MIDI_OFF_CMD = 128;

// Visual notes
VNote = class VNote_CLASS {
    constructor(note) {
        this.note = note;
        this.position = {
            x: 0,
            y: 0,
        };
        this.display = false;
    }

    reset(width, height) {
        this.position.x = width / 2;
        this.position.y = height / 2;
    }

    draw() {
        if (this.display == true) {
            p5.ellipse(this.position.x, this.position.y, 100, 100);
            p5.fill(this.note * 2, 0, 0)
        }
    }

    setDisplay(d) {
        this.display = d;
    }

    getDisplay() {
        return this.display;
    }
}

vnotes = new Array(128);
for (let i = 0; i < vnotes.length; i++) {
    vnotes[i] = new VNote(i);
}

// Init p5
p5 = new P5((sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
    }
});

p5.pixelDensity(1);
p5.hide()

// On midi input
drawMidi = function(command, note, velocity) {
    if (command === undefined || note === undefined) {
        return;
    }

    // Show or hide vnote
    var vnote = vnotes[note];
    if (command === MIDI_ON_CMD) {
        if (vnote.getDisplay() == false) {
            vnote.reset(window.innerWidth, window.innerHeight);
        }
        vnote.setDisplay(true);
    } else if (command == MIDI_OFF_CMD) {
        vnote.setDisplay(false);
    } else {
        console.log("Unknown command");
    }

    // Assign words
    assignWords(vnotes);
}

// p5 draw loop
p5.draw = () => {
    p5.clear();
    for (let i = 0; i < vnotes.length; i++) {
        vnotes[i].draw(p5);
    }
}
