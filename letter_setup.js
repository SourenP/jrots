myp5.remove()

NOTE_TO_LETTER = {
    0: 'Ա',
    1: 'Բ',
    2: 'Գ',
    3: 'Դ',
    4: 'Ե',
    5: 'Զ',
    6: 'Է',
    7: 'Ը',
    8: 'Թ',
    9: 'Ժ',
    10: 'Ի',
    11: 'Լ',
}

noto_sans_arm = false;
font_ready = false;

MIDI_ON_CMD = 144;
TEXT_SIZE = 200;
DRAW_MARGIN = 800;

myp5 = new P5((sketch) => {
    function fontRead() {
        font_ready = true;
    }
    sketch.preload = () => {
        noto_sans_arm = sketch.loadFont('./assets/fonts/NotoSansArmenian-Bold.ttf', fontRead);
    }
    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
    }
});

myp5.pixelDensity(1);
myp5.hide()

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

drawLetter = function (command, note, velocity) {
    if (command === undefined || note === undefined) {
        return;
    }

    if (NOTE_TO_LETTER[note % 12] === undefined) {
        return;
    }

    myp5.draw = () => {
        myp5.clear();
        for (let i = 0; i < letters.length; i++) {
            var letter = letters[i];
            if (note === letter.note) {
                if (command === MIDI_ON_CMD) {
                    if (letter.display == false) {
                        // TODO: Fix this formula.
                        // Text size probably doesn't correspond to the width of the text.
                        letter.position.x = (Math.random() * (myp5.canvas.width - DRAW_MARGIN)) + (DRAW_MARGIN / 2);
                        letter.position.y = (Math.random() * (myp5.canvas.height - DRAW_MARGIN)) + (DRAW_MARGIN / 2);
                        console.log(letter.position.x, );
                    }
                    letter.display = true;
                } else {
                    letter.display = false;
                }
            }
            if (letter.display == true) {
                if (font_ready) {
                    myp5.textFont(noto_sans_arm);
                }
                myp5.textAlign('center', 'center');
                myp5.textSize(TEXT_SIZE);
                myp5.textStyle('bold');
                myp5.text(letter.text, letter.position.x, letter.position.y);
                myp5.fill(255, 255, 255);
            }
        }
    }
}
