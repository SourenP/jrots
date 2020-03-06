ASSIGN_WORDS = true;

MIDI_ON_CMD = 144;
MIDI_OFF_CMD = 128;

// Init p5
p5 = new P5((sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
    }
});

p5.pixelDensity(1);
p5.hide()

// Load fonts
noto_am_font = p5.loadFont(atom.project.getPaths()[0] + '/assets/fonts/NotoSansArmenian-Bold.ttf', () => {
    console.log("noto_am_font font loaded.")
});
ots_am_font = p5.loadFont(atom.project.getPaths()[0] + '/assets/fonts/ots_v0.01.ttf', () => {
    console.log("ots_am_font font loaded.")
});
open_en_font = p5.loadFont(atom.project.getPaths()[0] + '/assets/fonts/OpenSans-Bold.ttf', () => {
    console.log("open_en_font font loaded.")
});


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
    if (ASSIGN_WORDS) {
        assignWords(vnotes);
    }
}

// p5 draw loop
p5.draw = () => {
    p5.clear();
    for (let i = 0; i < vnotes.length; i++) {
        vnotes[i].draw(p5);
    }

}