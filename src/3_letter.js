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

// Define Letters
Letter = class Letter_CLASS extends VNote {
    constructor(note) {
        super(note);
        this.text = NOTE_TO_LETTER[this.note % 12];
    }

    setFont(font) {
        this.font = font;
    }

    reset(width, height) {
        let width_margin = width * MARGIN;
        let height_margin = height * MARGIN;
        this.position.x = (Math.random() * (width - width_margin)) +
            (width_margin / 2);
        this.position.y = (Math.random() * (height - height_margin)) +
            (height_margin / 2);
        this.color = '#FFFFFF';
        this.text = NOTE_TO_LETTER[this.note % 12];
    }

    draw(p5_inst) {
        if (this.display == true) {
            p5_inst.fill(this.color);
            p5_inst.textFont(this.font);
            p5_inst.textAlign('center', 'center');
            p5_inst.textSize(TEXT_SIZE);
            p5_inst.textStyle('bold');
            p5_inst.text(this.text, this.position.x, this.position.y);
        }
    }
}

// Init
for (let i = 0; i < vnotes.length; i++) {
    vnotes[i] = new Letter(i);
    vnotes[i].setFont("Arial");
}