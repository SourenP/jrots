// p5.remove()

NOTE_TO_LETTER = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
}

MIDI_ON_CMD = 144;
MIDI_OFF_CMD = 128;

TEXT_SIZE = 100;

DRAW_MARGIN = 0.3;

// Init p5
p5 = new P5((sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
    }
});

p5.pixelDensity(1);
p5.hide()

width_margin = p5.canvas.width * DRAW_MARGIN;
height_margin = p5.canvas.height * DRAW_MARGIN;

// Load font
font = false;
font_ready = false;
function fontRead() {
    font_ready = true;
}
font = p5.loadFont(atom.project.getPaths()[0] + '/assets/fonts/ots_v0.01.ttf', fontRead);

// Init letters
letters = new Array(128);
for (let i = 0; i < letters.length; i++) {
    letters[i] = {
        note: i,
        text: NOTE_TO_LETTER[i % 12],
        velocity: 1,
        position: { x: 0, y: 0 },
        display: false,
    }
}

// Define draw letter
drawLetter = function (command, note, velocity) {
    if (command === undefined || note === undefined) {
        return;
    }

    if (NOTE_TO_LETTER[note % 12] === undefined) {
        return;
    }

    var letter = letters[note];
    if (command === MIDI_ON_CMD) {
        if (letter.display == false) {
            // Reset letter to random position
            letter.position.x = (Math.random() * (p5.canvas.width - width_margin)) + (width_margin / 2);
            letter.position.y = (Math.random() * (p5.canvas.height - height_margin)) + (height_margin / 2);
        }
        letter.display = true;
    } else if (command == MIDI_OFF_CMD) {
        letter.display = false;
    } else {
        console.log("Unknown command");
    }
}

// p5 draw loop
p5.draw = () => {
    p5.clear();
    for (let i = 0; i < letters.length; i++) {
        var letter = letters[i];
        if (letter.display == true) {
            if (font_ready) {
                p5.textFont(font);
            }
            p5.textAlign('center', 'center');
            p5.textSize(TEXT_SIZE);
            p5.textStyle('bold');
            p5.text(letter.text, letter.position.x, letter.position.y);
            p5.fill(255, 255, 255);
        }
    }
}
