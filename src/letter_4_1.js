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

TEXT_SIZE = 100;
MARGIN = 0.3;

// Load font
font = false;
font_ready = false;

font = p5.loadFont(
    atom.project.getPaths()[0] + '/assets/fonts/ots_v0.01.ttf',
    () => {font_ready = true;}
);

// Define Letters
Letter = class Letter_CLASS extends VNote {
    constructor(note) {
        super(note);
        this.text = NOTE_TO_LETTER[this.note % 12];
    }

    reset(width, height) {
        let width_margin = width * MARGIN;
        let height_margin = height * MARGIN;
        this.position.x = (Math.random() * (width - width_margin)) + (width_margin / 2);
        this.position.y = (Math.random() * (height - height_margin)) + (height_margin / 2);
    }

    draw() {
        if (this.display == true) {
            if (font_ready) {
                p5.textFont(font);
            }
            p5.textAlign('center', 'center');
            p5.textSize(TEXT_SIZE);
            p5.textStyle('bold');
            p5.text(this.text, this.position.x, this.position.y);
            p5.fill(255, 255, 255);
        }
    }
}

for (let i = 0; i < vnotes.length; i++) {
    vnotes[i] = new Letter(i);
}
